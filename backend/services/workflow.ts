// Workflow Management Service
// Handles workflow and workflow state creation with proper relationship management

import { PrismaClient } from '../generated/prisma/index.js';
import { Workflow, WorkflowStateTemplate, WorkflowValidationError } from '../types/index.js';

export class WorkflowService {
  constructor(private prisma: PrismaClient) {}

  async createWorkflowsWithStates(
    projectId: number,
    workflows: Record<string, Workflow>,
    tx?: PrismaClient
  ): Promise<Array<{ id: number; slug: string; name: string; description: string }>> {
    const client = tx || this.prisma;
    
    // Create workflows first
    const workflowsData = Object.values(workflows).map(workflow => ({
      project_id: projectId,
      slug: workflow.slug,
      name: workflow.name,
      description: workflow.description
    }));

    await client.workflow.createMany({ data: workflowsData });

    // Get created workflows
    const createdWorkflows = await client.workflow.findMany({
      where: { project_id: projectId }
    });

    // Create workflow states for each workflow
    for (const workflow of Object.values(workflows)) {
      const dbWorkflow = createdWorkflows.find(w => w.slug === workflow.slug);
      if (!dbWorkflow) {
        throw new WorkflowValidationError(`Failed to create workflow: ${workflow.slug}`, workflow.slug);
      }

      await this.createWorkflowStates(dbWorkflow.id, workflow.states, client);
    }

    return createdWorkflows;
  }

  private async createWorkflowStates(
    workflowId: number,
    states: WorkflowStateTemplate[],
    tx: PrismaClient
  ): Promise<void> {
    if (states.length === 0) return;

    // Validate state data
    this.validateWorkflowStates(states);

    // Create states with proper sequencing
    const statesData = states.map(state => ({
      workflow_id: workflowId,
      slug: state.slug,
      state_name: state.name,
      instruction: state.instruction,
      auto_command: state.auto_command || null,
      allowed_commands: state.allowed_commands,
      allowed_paths: state.allowed_paths,
      timeout: state.timeout || null,
      transitions: state.transitions,
      previous_state_id: null as number | null // Will be updated in second pass
    }));

    // First pass: create all states without previous_state_id
    await tx.workflowState.createMany({ data: statesData });

    // Get created states to build previous_state_id relationships
    const createdStates = await tx.workflowState.findMany({
      where: { workflow_id: workflowId },
      orderBy: { id: 'asc' }
    });

    // Second pass: update previous_state_id for proper sequencing
    for (let i = 1; i < createdStates.length; i++) {
      await tx.workflowState.update({
        where: { id: createdStates[i].id },
        data: { previous_state_id: createdStates[i - 1].id }
      });
    }
  }

  private validateWorkflowStates(states: WorkflowStateTemplate[]): void {
    // Check for duplicate slugs
    const slugs = states.map(s => s.slug);
    const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
    if (duplicateSlugs.length > 0) {
      throw new WorkflowValidationError(`Duplicate workflow state slugs found: ${duplicateSlugs.join(', ')}`);
    }

    // Validate each state
    for (const state of states) {
      if (!state.slug || !state.name || !state.instruction) {
        throw new WorkflowValidationError(`Invalid workflow state: missing required fields`, undefined, state.slug);
      }

      // Validate transitions point to valid states
      for (const targetSlug of Object.values(state.transitions)) {
        if (!slugs.includes(targetSlug)) {
          throw new WorkflowValidationError(`Invalid transition target '${targetSlug}' in state '${state.slug}'`, undefined, state.slug);
        }
      }
    }
  }

  async getWorkflowWithStates(workflowId: number): Promise<any> {
    return await this.prisma.workflow.findUnique({
      where: { id: workflowId },
      include: {
        workflow_states: {
          orderBy: { id: 'asc' }
        }
      }
    });
  }

  async getInitialWorkflowState(workflowId: number): Promise<any> {
    return await this.prisma.workflowState.findFirst({
      where: { 
        workflow_id: workflowId,
        previous_state_id: null
      }
    });
  }
}