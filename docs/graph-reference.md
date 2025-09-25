# VCorpState Graph Reference

## Graph Structure

**Nodes**: Documents and Jobs
**Edges**: Dependencies and transformations

### Document Nodes
- **ID**: document.id
- **Label**: document.title 
- **Type**: document.collection_slug (features, product_tickets, etc.)
- **Status**: ready, in_progress, done, blocked
- **Content**: document.content (for inspection)
- **File Path**: document.file_path

### Job Nodes  
- **ID**: job.id
- **Label**: job.slug
- **Squad**: job.role (determines visual grouping)
- **Status**: completed boolean
- **Automated**: whether requires manual approval
- **Paused**: emergency stop flag

### Document Dependencies (blocked_by)
- **Source**: blocking document
- **Target**: blocked document  
- **Type**: "blocks" edge
- **Logic**: blocked document cannot be processed until blocking document is done

### Job Input/Output Chains
- **Job Input Edge**: collection/document → job (job consumes input)
- **Job Output Edge**: job → collection/document (job produces output)
- **Logic**: job executes when all inputs are ready, produces outputs when complete

## Squad Grouping
Jobs are grouped by role into visual squads:
- **pd**: Product Designer
- **sa**: System Architect  
- **fe_lead, fe, fe_reviewer**: Frontend Squad
- **be_lead, be, be_reviewer**: Backend Squad
- **ai_lead, ai, ai_reviewer**: AI Squad
- **qa**: QA Squad

## Document Status Logic
- **blocked**: Has items in blocked_by array
- **ready**: blocked_by is empty, available for processing
- **in_progress**: Agent picked up document
- **done**: Processing complete

## Job Execution Logic
- Jobs execute when ALL input documents/collections have status "ready"
- Jobs with `isCollection: true` wait for entire collection to be ready
- Jobs with `isCollection: false` process individual documents
- Completed jobs unblock downstream jobs

## Change Tracking
- **job_document_snapshots** tracks what documents each job processed
- When document.last_updated_at > snapshot.document_last_updated_at, reprocessing needed
- Reprocessing is incremental (add/modify) not replacement

## File System Mirror
- All documents mirror to .vcorp/{collection_slug}/{document_slug}.md
- Graph can link to actual files for inspection