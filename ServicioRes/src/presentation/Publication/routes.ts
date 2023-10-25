import { Router } from 'express';
import { PublicationController } from './controller';

export class PublicationRoutes {
  static get routes(): Router {
    const router = Router();
    const publicationController = new PublicationController();
    router.get('/', publicationController.getPublication);
    router.get('/:id', publicationController.getPublicationById );
    router.post('/', publicationController.createPublication );
    router.put('/:id', publicationController.updatePublication );
    router.delete('/:id', publicationController.deletePublication );
    return router;
  }
}

