import { Router } from 'express';
import { RolController } from './controller';

export class RolRoutes {
  static get routes(): Router {
    const router = Router();
    const rolController = new RolController();
    router.get('/', rolController.getRoles);
    router.get('/:id', rolController.getRolById );
    router.post('/', rolController.createRol );
    router.put('/:id', rolController.updateRol );
    router.delete('/:id', rolController.deleteRol );
    return router;
  }
}

