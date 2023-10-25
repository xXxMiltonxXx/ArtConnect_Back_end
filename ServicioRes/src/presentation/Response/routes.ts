import { Router } from 'express';
import { ResponseController } from './controller';

export class ResponseRoutes {
  static get routes(): Router {
    const router = Router();
    const responseController = new ResponseController();
    router.get('/', responseController.getResponses);
    router.get('/:id', responseController.getResponseById);
    router.post('/', responseController.createResponse );
    router.put('/:id', responseController.updateResponse );
    router.delete('/:id', responseController.deleteResponse );
    return router;
  }
}

