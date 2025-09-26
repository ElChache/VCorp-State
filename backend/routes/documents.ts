import { Router } from 'express';
import { DatabaseService } from '../services/database.js';

const router = Router();
const db = new DatabaseService();

/**
 * PATCH /api/documents/:id/ready
 * Update the ready status of a document
 * 
 * Request body:
 * {
 *   "ready": boolean
 * }
 */
router.patch('/:id/ready', async (req, res) => {
  try {
    const documentId = parseInt(req.params.id);
    const { ready } = req.body;

    // Validation
    if (isNaN(documentId)) {
      return res.status(400).json({
        error: 'Invalid document ID',
        message: 'Document ID must be a valid number'
      });
    }

    if (typeof ready !== 'boolean') {
      return res.status(400).json({
        error: 'Invalid ready value',
        message: 'ready field must be a boolean (true/false)'
      });
    }

    // Check if document exists
    const existingDocument = await db.getDocumentById(documentId);
    if (!existingDocument) {
      return res.status(404).json({
        error: 'Document not found',
        documentId
      });
    }

    // Update document ready status
    const updatedDocument = await db.updateDocumentReady(documentId, ready);

    res.json({
      success: true,
      message: `Document ${ready ? 'marked as ready' : 'marked as not ready'}`,
      document: {
        id: updatedDocument.id,
        slug: updatedDocument.slug,
        name: updatedDocument.name,
        ready: updatedDocument.ready,
        status: updatedDocument.status,
        updated_at: updatedDocument.updated_at
      }
    });

  } catch (error) {
    console.error('❌ Error updating document ready status:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

/**
 * GET /api/documents/ready
 * Get all ready documents across all projects
 */
router.get('/ready', async (req, res) => {
  try {
    const readyDocuments = await db.getReadyDocuments();

    res.json({
      success: true,
      documents: readyDocuments,
      count: readyDocuments.length
    });

  } catch (error) {
    console.error('❌ Error fetching ready documents:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

/**
 * GET /api/documents/ready/:projectId
 * Get all ready documents for a specific project
 */
router.get('/ready/:projectId', async (req, res) => {
  try {
    const projectId = parseInt(req.params.projectId);

    if (isNaN(projectId)) {
      return res.status(400).json({
        error: 'Invalid project ID',
        message: 'Project ID must be a valid number'
      });
    }

    const readyDocuments = await db.getReadyDocumentsByProject(projectId);

    res.json({
      success: true,
      projectId,
      documents: readyDocuments,
      count: readyDocuments.length
    });

  } catch (error) {
    console.error('❌ Error fetching ready documents for project:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;