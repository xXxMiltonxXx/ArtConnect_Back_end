import { Router } from 'express';
import { ServiceController } from './controller';

export class ServiceRoutes {
  static get routes(): Router {
    const router = Router();
    const serviceController = new ServiceController();
    router.get('/', serviceController.getServices);
    router.get('/:id', serviceController.getServiceById );
    router.post('/', serviceController.createService );
    router.put('/:id', serviceController.updateService );
    router.delete('/:id', serviceController.deleteService );
    return router;
  }
}

