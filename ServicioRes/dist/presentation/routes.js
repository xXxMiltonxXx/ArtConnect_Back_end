"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./Follower/routes");
const routes_2 = require("./users/routes");
const routes_3 = require("./Comunity/routes");
const routes_4 = require("./Publication/routes");
const routes_5 = require("./React/routes");
const routes_6 = require("./Comment/routes");
const routes_7 = require("./Customer/routes");
const routes_8 = require("./Invoice/routes");
const routes_9 = require("./InvLinePro/routes");
const routes_10 = require("./Category/routes");
const routes_11 = require("./Service/routes");
const routes_12 = require("./Product/routes");
const routes_13 = require("./Rol/routes");
const routes_14 = require("./Link/routes");
const routes_15 = require("./UserLinelink/routes");
const routes_16 = require("./Foro/routes");
const routes_17 = require("./Answer/routes");
const routes_18 = require("./Response/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/followers', routes_1.FollowersRoutes.routes);
        router.use('/api/users', routes_2.UserRoutes.routes);
        router.use('/api/comunity', routes_3.ComunityRoutes.routes);
        router.use('/api/publication', routes_4.PublicationRoutes.routes);
        router.use('/api/react', routes_5.ReactRoutes.routes);
        router.use('/api/comment', routes_6.CommentRoutes.routes);
        router.use('/api/customer', routes_7.CustomerRoutes.routes);
        router.use('/api/invoice', routes_8.InvoiceRoutes.routes);
        router.use('/api/invLinePro', routes_9.InvLineProRoutes.routes);
        router.use('/api/category', routes_10.CategoryRoutes.routes);
        router.use('/api/service', routes_11.ServiceRoutes.routes);
        router.use('/api/product', routes_12.ProductRoutes.routes);
        router.use('/api/rol', routes_13.RolRoutes.routes);
        router.use('/api/link', routes_14.LinkRoutes.routes);
        router.use('/api/userLineLink', routes_15.UserLineLinkRoutes.routes);
        router.use('/api/foro', routes_16.ForoRoutes.routes);
        router.use('/api/answer', routes_17.AnswerRoutes.routes);
        router.use('/api/response', routes_18.ResponseRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
