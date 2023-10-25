"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class PublicationRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const publicationController = new controller_1.PublicationController();
        router.get('/', publicationController.getPublication);
        router.get('/:id', publicationController.getPublicationById);
        router.post('/', publicationController.createPublication);
        router.put('/:id', publicationController.updatePublication);
        router.delete('/:id', publicationController.deletePublication);
        return router;
    }
}
exports.PublicationRoutes = PublicationRoutes;
