import { Router } from 'express';
import { ForoController } from './controller';

export class ForoRoutes {
  static get routes(): Router {
    const router = Router();
    const foroController = new  ForoController();
    router.get('/', foroController.getForo);
    router.get('/:id', foroController.getForoById );
    router.post('/', foroController.createForo );
    router.put('/:id', foroController.updateForo );
    router.delete('/:id', foroController.deleteForo );
    return router;
  }
}

