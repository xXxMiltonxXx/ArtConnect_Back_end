import { Router } from 'express';
import { CommentController } from './controller';

export class CommentRoutes {
  static get routes(): Router {
    const router = Router();
    const commentController = new CommentController();
    router.get('/', commentController.getComment);
    router.get('/:id', commentController.getCommentById );
    router.post('/', commentController.createComment );
    router.put('/:id', commentController.updateComment);
    router.delete('/:id', commentController.deleteComment );
    return router;
  }
}

