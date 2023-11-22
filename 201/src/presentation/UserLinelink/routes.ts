import { Router } from 'express';
import { UserLineLinkController } from './controller';

export class UserLineLinkRoutes {
  static get routes(): Router {
    const router = Router();
    const userLineLinkController = new UserLineLinkController();
    router.get('/', userLineLinkController.getUserLineLink);
    router.get('/:id', userLineLinkController.getUserLineLinkById );
    router.post('/', userLineLinkController.createUserLineLink );
    router.put('/:id', userLineLinkController.updateUserLineLink );
    router.delete('/:id', userLineLinkController.deleteUserLineLink);
    return router;
  }
}

