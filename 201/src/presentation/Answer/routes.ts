import { Router } from 'express';
import { AnswerController } from './controller';

export class AnswerRoutes {
  static get routes(): Router {
    const router = Router();
    const answerController = new AnswerController();
    router.get('/', answerController.getAnswer);
    router.get('/:id', answerController.getAnswerById );
    router.post('/', answerController.createAnswer);
    router.put('/:id', answerController.updateAnswer );
    router.delete('/:id', answerController.deleteAnswer );
    return router;
  }
}

