import { Router } from 'express';

import { FollowersRoutes,  } from './Follower/routes';
import {  UserRoutes  } from './users/routes';
import {  ComunityRoutes  } from './Comunity/routes';
import {  PublicationRoutes  } from './Publication/routes';
import {  ReactRoutes  } from './React/routes';
import {  CommentRoutes  } from './Comment/routes';
import {  CustomerRoutes  } from './Customer/routes';
import {  InvoiceRoutes  } from './Invoice/routes';
import {  InvLineProRoutes  } from './InvLinePro/routes';
import {  CategoryRoutes  } from './Category/routes';
import {  ServiceRoutes  } from './Service/routes';
import {  ProductRoutes  } from './Product/routes';
import {  RolRoutes  } from './Rol/routes';
import {  LinkRoutes  } from './Link/routes';
import {  UserLineLinkRoutes  } from './UserLinelink/routes';
import {  ForoRoutes  } from './Foro/routes';
import {  AnswerRoutes  } from './Answer/routes';
import {  ResponseRoutes  } from './Response/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/followers', FollowersRoutes.routes );
    router.use('/api/users', UserRoutes.routes );
    router.use('/api/comunity', ComunityRoutes.routes );
    router.use('/api/publication', PublicationRoutes.routes );
    router.use('/api/react', ReactRoutes.routes );
    router.use('/api/comment', CommentRoutes.routes );
    router.use('/api/customer', CustomerRoutes.routes );
    router.use('/api/invoice', InvoiceRoutes.routes );
    router.use('/api/invLinePro', InvLineProRoutes.routes );
    router.use('/api/category', CategoryRoutes.routes );
    router.use('/api/service', ServiceRoutes.routes );
    router.use('/api/product', ProductRoutes.routes );
    router.use('/api/rol', RolRoutes.routes );
    router.use('/api/link', LinkRoutes.routes );
    router.use('/api/userLineLink', UserLineLinkRoutes.routes );
    router.use('/api/foro', ForoRoutes.routes );
    router.use('/api/answer', AnswerRoutes.routes );
    router.use('/api/response', ResponseRoutes.routes );

    return router;
  }


}

