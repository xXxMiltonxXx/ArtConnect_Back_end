import { Router } from 'express';
import { ReactController } from './controller';

export class ReactRoutes {
  static get routes(): Router {
    const router = Router();
    const reactController = new ReactController();
    router.get('/', reactController.getReact);
    router.get('/:id', reactController.getReactById );
    router.post('/', reactController.createReact );
    router.put('/:id', reactController.updateReact );
    router.delete('/:id', reactController.deleteReact );
    return router;
  }
}

