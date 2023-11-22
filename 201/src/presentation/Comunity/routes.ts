import { Router } from 'express';
import { ComunityController } from './controller';

export class ComunityRoutes {
  static get routes(): Router {
    const router = Router();
    const comunityController = new ComunityController();
    router.get('/', comunityController.getCommunities);
    router.get('/:id', comunityController.getCommunityById );
    router.post('/', comunityController.createCommunity );
    router.put('/:id', comunityController.updateComunity );
    router.delete('/:id', comunityController.deleteComunity );
    return router;
  }
}

