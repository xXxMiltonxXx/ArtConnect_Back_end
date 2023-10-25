"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class LinkRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const linkController = new controller_1.LinkController();
        router.get('/', linkController.getLink);
        router.get('/:id', linkController.getLinkById);
        router.post('/', linkController.createLink);
        router.put('/:id', linkController.updateLink);
        router.delete('/:id', linkController.deleteLink);
        return router;
    }
}
exports.LinkRoutes = LinkRoutes;
