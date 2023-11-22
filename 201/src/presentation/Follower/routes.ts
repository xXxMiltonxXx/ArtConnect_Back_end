import { Router } from 'express';
import { FollowerController } from './controller';


export class FollowersRoutes {


  static get routes(): Router {

    const router = Router();

    const followerController = new FollowerController();

    router.get('/', followerController.getFollowers );
    router.get('/:id', followerController.getFollowerById );
    
    router.post('/', followerController.createFollower );
    router.put('/:id', followerController.updateFollower );
    router.delete('/:id', followerController.deleteFollower );


    return router;
  }


}

