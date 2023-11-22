import { Router } from 'express';
import { InvLineProController } from './controller';

export class InvLineProRoutes {
  static get routes(): Router {
    const router = Router();
    const invLineProController = new InvLineProController();
    router.get('/', invLineProController.getInvLinePro);
    router.get('/:id', invLineProController.getInvLineProById );
    router.post('/', invLineProController.createInvLinePro );
    router.put('/:id', invLineProController.updateInvLinePro );
    router.delete('/:id', invLineProController.deleteInvLinePro );
    return router;
  }
}

