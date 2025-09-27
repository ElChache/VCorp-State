// Agent Job Status Management Service
// Handles agent job assignments, status tracking, and round-robin scheduling

import { PrismaClient } from '../generated/prisma/index.js';
import { AgentJobStatus } from '../types/index.js';

export class AgentJobStatusService {
  constructor(private prisma: PrismaClient) {}

  /**
   * Assign an agent to a job with initial workflow state
   */
  async assignAgentToJob(
    agentId: number, 
    jobId: number, 
    initialWorkflowStateId?: number
  ): Promise<AgentJobStatus> {
    // Check if assignment already exists
    const existing = await this.prisma.agentJobStatus.findUnique({
      where: { agent_id_job_id: { agent_id: agentId, job_id: jobId } }
    });

    if (existing) {
      throw new Error(`Agent ${agentId} is already assigned to job ${jobId}`);
    }

    // If no initial state provided, get the first state of the job's workflow
    let workflowStateId = initialWorkflowStateId;
    if (!workflowStateId) {
      const job = await this.prisma.job.findUnique({
        where: { id: jobId },
        include: { workflow: { include: { workflow_states: true } } }
      });

      if (!job) {
        throw new Error(`Job ${jobId} not found`);
      }

      const initialState = job.workflow.workflow_states.find(s => s.previous_state_id === null);
      workflowStateId = initialState?.id;
    }

    return await this.prisma.agentJobStatus.create({
      data: {
        agent_id: agentId,
        job_id: jobId,
        current_workflow_state_id: workflowStateId,
        last_worked_at: new Date()
      }
    });
  }

  /**
   * Update agent's workflow state within a job
   */
  async updateAgentWorkflowState(
    agentId: number, 
    jobId: number, 
    newWorkflowStateId: number
  ): Promise<AgentJobStatus> {
    return await this.prisma.agentJobStatus.update({
      where: { agent_id_job_id: { agent_id: agentId, job_id: jobId } },
      data: {
        current_workflow_state_id: newWorkflowStateId,
        last_worked_at: new Date()
      }
    });
  }

  /**
   * Get next job for an agent using round-robin (least recently worked)
   */
  async getNextJobForAgent(agentId: number, projectId: number): Promise<number | null> {
    // Get all jobs in the project that the agent's role can work on
    const agent = await this.prisma.agent.findUnique({
      where: { id: agentId },
      include: { role_ref: true }
    });

    if (!agent) return null;

    // Find jobs that match agent's role and aren't completed
    const availableJobs = await this.prisma.job.findMany({
      where: {
        project_id: projectId,
        role: agent.role,
        completed: false,
        paused: false
      },
      include: {
        agent_job_statuses: {
          where: { agent_id: agentId }
        }
      }
    });

    if (availableJobs.length === 0) return null;

    // Sort by last_worked_at (ascending) to implement round-robin
    const sortedJobs = availableJobs
      .map(job => ({
        id: job.id,
        lastWorkedAt: job.agent_job_statuses[0]?.last_worked_at || new Date(0)
      }))
      .sort((a, b) => a.lastWorkedAt.getTime() - b.lastWorkedAt.getTime());

    return sortedJobs[0].id;
  }

  /**
   * Get all agents working on a specific job
   */
  async getAgentsOnJob(jobId: number): Promise<Array<AgentJobStatus & { agent: any; current_workflow_state: any }>> {
    return await this.prisma.agentJobStatus.findMany({
      where: { job_id: jobId },
      include: {
        agent: true,
        current_workflow_state: true
      },
      orderBy: { last_worked_at: 'desc' }
    });
  }

  /**
   * Get all jobs an agent is working on
   */
  async getJobsForAgent(agentId: number): Promise<Array<AgentJobStatus & { job: any; current_workflow_state: any }>> {
    return await this.prisma.agentJobStatus.findMany({
      where: { agent_id: agentId },
      include: {
        job: true,
        current_workflow_state: true
      },
      orderBy: { last_worked_at: 'desc' }
    });
  }

  /**
   * Remove agent from job
   */
  async removeAgentFromJob(agentId: number, jobId: number): Promise<void> {
    await this.prisma.agentJobStatus.delete({
      where: { agent_id_job_id: { agent_id: agentId, job_id: jobId } }
    });
  }

  /**
   * Get workflow progress statistics for a job
   */
  async getJobWorkflowProgress(jobId: number): Promise<{
    totalAgents: number;
    stateDistribution: Record<string, number>;
    completionPercentage: number;
  }> {
    const agentStatuses = await this.prisma.agentJobStatus.findMany({
      where: { job_id: jobId },
      include: { current_workflow_state: true }
    });

    const job = await this.prisma.job.findUnique({
      where: { id: jobId },
      include: { workflow: { include: { workflow_states: true } } }
    });

    if (!job) {
      throw new Error(`Job ${jobId} not found`);
    }

    const totalStates = job.workflow.workflow_states.length;
    const stateDistribution: Record<string, number> = {};
    
    // Count agents in each state
    agentStatuses.forEach(status => {
      const stateName = status.current_workflow_state?.state_name || 'unassigned';
      stateDistribution[stateName] = (stateDistribution[stateName] || 0) + 1;
    });

    // Calculate rough completion percentage based on average state progress
    const avgStateIndex = agentStatuses.reduce((sum, status) => {
      const states = job.workflow.workflow_states;
      const stateIndex = states.findIndex(s => s.id === status.current_workflow_state_id);
      return sum + (stateIndex >= 0 ? stateIndex : 0);
    }, 0) / agentStatuses.length;

    const completionPercentage = totalStates > 0 ? (avgStateIndex / (totalStates - 1)) * 100 : 0;

    return {
      totalAgents: agentStatuses.length,
      stateDistribution,
      completionPercentage: Math.round(completionPercentage)
    };
  }
}