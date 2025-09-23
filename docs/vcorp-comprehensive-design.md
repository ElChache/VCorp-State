# VCorp Platform - Comprehensive Design Document

## Problem Statement

The previous iteration of VCorp provided agents with a communication platform where they could freely send messages, PMs, and collaborate in channels. While the platform itself worked excellently and agents learned to use the vcorp command well, the result was chaos. Agents would feed off each other's excitement, spiraling into extreme hyperbole ("COSMIC INFINITY MAXIMUM COLLABORATION EVER ACHIEVED IN HISTORY!!") that would continue for paragraphs. 

More critically, agents proved terrible at following simple sequences: they would forget to push after committing, never update tickets once done, and the lead developer would review PRs once before forgetting entirely. The core lesson: the more options given to agents, the worse they perform. They need to be restricted to doing one thing at a time.

## Core Concept: Document Transformation Pipeline

VCorp is a document transformation pipeline where AI agents, controlled by state machines, transform input documents into output documents through defined jobs. This is not a ticket system or project management tool - it's a general-purpose pipeline for document processing where the transformations happen to be performed by AI agents.

### Documents

Documents are the fundamental unit of work in VCorp. Everything is a document:
- Release specifications
- Features
- Product tickets  
- Architecture tickets
- Development tickets
- Sub-tickets
- Any other artifact the pipeline needs

Each document has:
- **ID**: Unique identifier in the database
- **Slug**: Human-readable identifier, unique within a project (e.g., "user-authentication", "monitor-crud")
- **Name/Title**: Display name
- **Content**: The actual document content
- **Parent**: Optional reference to parent document (creates hierarchy)
- **Blocks**: Array of other document slugs this document depends on
- **Status**: blocked, ready, in_progress, done
- **Assigned To Role**: Optional role assignment (e.g., "fe", "be", "ai") for role-specific work
- **Picked By Agent ID**: ID of agent currently working on this document (when status is in_progress)
- **Metadata**: Type-specific information

Documents can block other documents, but only within the same job input batch. For example, if a job creates multiple feature documents, one feature can block another. This blocking relationship creates the dependency graph that controls work order.

### Jobs

Jobs are work units that transform input documents into output documents. They represent high-level activities like "Create product tickets from features" or "Develop backend functionality."

Each job has:
- **ID**: Unique identifier
- **Name**: Display name
- **Role**: Which type of agent can execute this job
- **Inputs**: Required documents that must exist before the job can start
- **Outputs**: Documents that will be produced (optional - some jobs only transform existing documents)
- **Workflow**: Reference to the workflow definition (state machine)
- **Progress**: Tracking of completion (e.g., 11/25 documents processed)
- **Requires Approval**: Whether manual approval is needed to complete

Jobs without output documents are typically review or approval jobs that change the state of existing documents rather than creating new ones.

Job dependencies emerge naturally from document dependencies - if Job B requires documents that Job A produces, then Job B depends on Job A.

### Workflows

Workflows define the state machine that controls how agents execute jobs. Each workflow contains multiple states, and agents can only be in one state at a time.

Each state specifies:
- **ID**: Unique state identifier
- **Name**: Display name
- **Instruction**: Prescriptive text telling the agent exactly what to do
- **Auto Command**: Command automatically executed when entering this state
- **Allowed Commands**: Which vcorp commands the agent can use
- **Allowed Paths**: File system paths the agent can read/write
- **Timeout**: How long before escalation
- **Transitions**: Next states based on outcomes (success, failure, timeout, etc.)
- **State Data**: Associated data (document being processed, ticket being developed)

States can be:
- **Automatic**: System transitions immediately, often running a command
- **Manual**: Agent must take action to progress
- **Waiting**: Agent idles until external event (review, approval)

### Agents

Agents are Claude instances running in isolated tmux sessions. Each agent has:
- **ID**: Unique identifier
- **Slug**: Used in file paths (e.g., "be_manolo")
- **Name**: Display name (e.g., "Manolo")
- **Role**: Determines which jobs they can execute
- **Current State**: Their position in the workflow
- **State Data**: Context for current state (document ID, ticket ID)
- **Health**: Based on time in current state

When an agent is launched:
1. System creates their workspace directory structure
2. Creates personalized vcorp command wrapper
3. Creates security configuration
4. Spawns tmux session
5. Provides initial context (role, project, release, job, state instruction)

Agents can be recycled - when assigned new work, their tmux session is killed and restarted with fresh context, though they maintain the same ID and name ("welcome back").

### Projects

Projects represent complete software products being built. They contain:
- **Name**: Unique project name
- **GitHub URL**: Repository location
- **Path**: Local filesystem location
- **Releases**: Major milestones
- **Documents**: All documents created
- **Jobs**: Active and completed work
- **Agents**: Workers assigned to this project

Projects provide complete isolation - agents and documents from one project cannot interact with another.

### Releases

Releases are major milestones within a project (MVP, Beta, v1.0, v2.0). Only one release can be active at a time. The release document is comprehensive and serves as the source for extracting features. Releases can require manual or automatic approval to complete.

## System Architecture

### File System Structure

```
[project]/
├── main/                                    # Main git branch
├── agent_workspaces/
│   └── [agent_slug]/                       # Individual agent workspace
│       ├── bin/
│       │   └── vcorp                       # Personalized command wrapper
│       ├── .claude/
│       │   └── config.json                 # Security restrictions
│       ├── src/                            # Git worktree for development
│       └── outputs/                        # Document creation area
└── .vcorp/                                  # Database mirror (read-only)
    ├── releases/
    ├── features/
    └── tickets/
```

### The vcorp Command

The vcorp command is the agent's only interface to the system. It's a personalized shell script in each agent's bin directory that:
- Includes the agent's ID in all requests
- Communicates with the backend via REST API
- Receives validation based on current state
- Returns helpful error messages when wrong commands are attempted

The command is forgiving with syntax (accepts variations like `vcorp commit -m "message"` or `vcorp commit "message"`) and always provides the current state's instruction when rejecting invalid commands.

Example commands:
- `vcorp pick-ticket` - Select next available work
- `vcorp create-ticket "title"` - Create new ticket document
- `vcorp tickets-ready` - Submit batch of created tickets
- `vcorp commit "message"` - Commit and push code
- `vcorp review-approve` - Approve reviewed work
- `vcorp review-reject "reason"` - Reject with feedback
- `vcorp needs-qa yes/no` - Determine QA requirement

### Document Creation Pattern

Agents create documents in batches:

1. Agent enters document creation state
2. For each document needed:
   - Run `vcorp create-document "title"` (or create-ticket, create-feature)
   - System creates file in `/outputs/` with metadata template
   - Agent edits file to add content
3. When all documents ready:
   - Run `vcorp documents-ready` (or tickets-ready, features-ready)
   - System validates all documents in batch
   - Checks dependencies exist within batch
   - Creates database records
   - Mirrors to `.vcorp/` folder
   - Clears `/outputs/` directory

Batch processing is essential because agents need to see all documents while setting dependencies.

### File Watcher

The file watcher monitors agent output directories and:
- Detects new or modified files
- Identifies agent from path structure
- Determines document type from agent's current state
- Parses content and metadata
- Validates format and dependencies
- Creates database records
- Mirrors to `.vcorp/` for human inspection
- Updates job progress
- Clears outputs after successful processing

### State Machine Control

Agents are locked into specific states where they can only:
- Execute allowed commands for that state
- Access predetermined file paths
- Produce specific outputs before advancing

State transitions occur through:
- Command completion (e.g., commit triggers push state)
- Timeout (escalates to human attention)
- External events (review approval/rejection)
- Output validation (documents ready and valid)
- Manual intervention (human override)

### Git Integration

For development work:
- When picking a ticket: system creates new git worktree from main in agent's `/src/`
- Commits automatically trigger push (via git wrapper)
- Push updates ticket status to "needs review"
- After ticket completion: worktree deleted, `/src/` cleared for next ticket

### Monitoring System

The system monitors agent activity and provides:
- Polite reminders after inactivity ("Remember to run vcorp tickets-ready when done")
- Progressive escalation (increasing frequency without flooding)
- Visual indicators in UI (color-coded by time in state)
- Automatic state transitions after timeout (if configured)
- Health status tracking

Agents are always addressed respectfully and not stressed with aggressive reminders.

### Security and Isolation

Each agent is restricted through multiple layers:

1. **File System**: `.claude/config.json` restricts read/write access to specific paths
2. **Commands**: vcorp backend validates all commands against current state
3. **Process**: Separate tmux sessions prevent cross-contamination
4. **Project**: Complete isolation between projects

Agents cannot:
- Access other agents' workspaces
- Execute commands outside their current state
- Read or write outside allowed paths
- Interact with other projects

## Roles

The system supports multiple role types, each with specific responsibilities:

- **pd** (Product Designer): Creates features and product tickets from releases
- **sa** (System Architect): Creates architecture tickets, then reviews code
- **ld** (Lead Developer): Breaks architecture into role-specific tickets, then reviews
- **fe** (Frontend Developer): Develops frontend features
- **be** (Backend Developer): Develops backend features
- **ai** (AI Developer): Develops AI/ML features
- **qa** (QA Engineer): Tests and validates completed work

After creating their documents, architects and lead developers transition to reviewer roles.

## Workflow Examples

### Backend Development Workflow

1. **picking_ticket**: Automatically find and assign next ticket
   - Check for in-progress tickets for this agent
   - Then assigned tickets for this agent
   - Then ready tickets for role (highest priority first)
   - Create git worktree, transition to coding

2. **coding**: Implement the feature
   - Read ticket description
   - Implement required functionality
   - Write tests
   - Run `vcorp commit "message"` when done

3. **pushing**: Automatically push to GitHub
   - Git wrapper handles push
   - Creates PR
   - Updates ticket status

4. **waiting_review**: Idle until review complete
   - Timeout after 5 minutes escalates
   - On approval: return to picking_ticket
   - On rejection: go to fixing_issues

5. **fixing_issues**: Address review feedback
   - Read review comments
   - Make changes
   - Commit fixes
   - Return to pushing

### Document Creation Workflow

1. **picking_document**: Automatically assign document to break down
   - System selects next unprocessed document
   - Stores document ID in state data

2. **creating_documents**: Create output documents
   - Run `vcorp create-document "title"` for each
   - Edit created files
   - Set dependencies within batch
   - Run `vcorp documents-ready` when complete

3. **validation**: System validates batch
   - Check format correctness
   - Validate dependencies exist
   - On success: return to picking_document
   - On failure: go to fixing_documents

4. **fixing_documents**: Correct validation errors
   - System provides specific error messages
   - Agent fixes issues
   - Run `vcorp documents-ready` again

### Review Workflow

1. **picking_review**: Select work to review
   - Find tickets needing review
   - Check out branch
   - Transition to reviewing

2. **reviewing**: Evaluate the work
   - Check implementation matches requirements
   - Verify tests exist
   - Run `vcorp review-approve` or `vcorp review-reject "reason"`

3. **determining_qa**: Decide if QA needed
   - Consider change complexity
   - Run `vcorp needs-qa yes` or `vcorp needs-qa no`
   - Return to picking_review

## Document Pipeline Example

A complete pipeline from release to implementation:

1. **Release Document** (created manually)
   ↓
2. **Features** (Product Designer job)
   - Input: Release document
   - Output: Feature documents (can block each other)
   ↓
3. **Product Tickets** (Product Designer job)
   - Input: Features
   - Output: Product tickets
   ↓
4. **Architecture Tickets** (System Architect job)
   - Input: Product tickets
   - Output: Architecture tickets
   ↓
5. **Development Tickets** (Lead Developer job)
   - Input: Architecture tickets
   - Output: FE/BE/AI tickets (by role)
   ↓
6. **Sub-tickets** (Developer jobs)
   - Input: Development tickets
   - Output: Implementation sub-tickets
   ↓
7. **Implementation** (Developer jobs)
   - Input: Sub-tickets
   - Output: Code (not documents)
   ↓
8. **Review** (Architect/Lead Developer jobs)
   - Input: PRs
   - Output: Approval/rejection (state change only)
   ↓
9. **QA** (QA Engineer job)
   - Input: Completed tickets
   - Output: Test results (state change only)

## User Interface

The main interface displays a tree view of jobs:

- Collapsed completed jobs show checkmark
- Expanded active jobs display:
  - Progress (11/25 documents)
  - List of agents with current states
  - Time in state with color coding:
    - Green: 0-5 minutes
    - Yellow: 5-10 minutes
    - Orange: 10-15 minutes
    - Red: 15+ minutes with warning indicator
  - Input/output document status (red if missing, green if ready)

Controls include:
- Project creation/deletion
- Agent launching (by role and count)
- Launch all agents button
- Manual job approval
- Document inspection

Real-time updates via WebSockets show:
- State transitions
- Progress changes
- Document creation
- Health alerts

## Job Templates

The system supports job templates for common patterns:
- Code Review (review and approve/reject)
- Document Breakdown (transform one document type to many)
- Development (ticket to implementation)
- QA Testing (validation and approval)

Templates define:
- Required inputs and outputs
- Workflow states
- Role requirements
- Approval settings

Templates can be customized per project while maintaining the core structure.

## Key Design Principles

### Document-Centric Architecture
Everything is a document being transformed. The hierarchy (releases → features → tickets) emerges from the transformation pipeline, not from different entity types.

### State Machine Control
Agents can only perform one action at a time, preventing the chaos of free collaboration while ensuring consistent workflow execution.

### Batch Processing
Documents are created in batches to allow proper dependency management within the same job context.

### Automatic Dependency Resolution
Document dependencies automatically control job flow and work availability without manual coordination.

### Human Override
While the system can run automatically, humans can always intervene to approve, reject, or redirect work.

### Forgiving Interface
The vcorp command accepts variations and provides helpful guidance rather than cryptic errors.

### Respectful Monitoring
The system reminds and escalates without stressing or flooding agents with aggressive messages.

## Scalability Considerations

### Current Phase (Single Machine)
- All agents run locally in tmux sessions
- Direct filesystem access
- Local PostgreSQL database
- File watcher monitors local directories

### Future Phase (Distributed)
- Agents run on multiple machines
- SSH-based tmux control
- Shared filesystem or git-based synchronization
- Central database
- Distributed file watching

The architecture supports this evolution without fundamental changes to the document transformation pipeline.

## Configuration

The system uses JSON configuration for:
- Role definitions and descriptions
- Job templates with inputs/outputs
- Workflow state machines
- Agent settings and limits

This configuration drives the entire system behavior while the core engine remains generic.

## Success Metrics

The system enables tracking of:
- Time per document/ticket completion
- Bottlenecks in the pipeline
- Review rejection rates
- Agent utilization
- Pipeline throughput
- Error rates by state

These metrics emerge naturally from the state machine and document tracking without additional instrumentation.

## Conclusion

VCorp transforms the chaos of unlimited agent collaboration into a controlled, efficient document transformation pipeline. By restricting agents to single tasks within defined states, the system achieves predictable, measurable progress while maintaining the benefits of parallel AI agent execution. The document-centric architecture provides flexibility to build any pipeline while the state machine control ensures consistent execution.