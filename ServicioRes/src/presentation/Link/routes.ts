import { Router } from 'express';
import { LinkController } from './controller';

export class LinkRoutes {
  static get routes(): Router {
    const router = Router();
    const linkController = new LinkController();
    router.get('/', linkController.getLink);
    router.get('/:id', linkController.getLinkById);
    router.post('/', linkController.createLink );
    router.put('/:id', linkController.updateLink );
    router.delete('/:id', linkController.deleteLink );
    return router;
  }
}

