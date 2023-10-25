"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ReactRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const reactController = new controller_1.ReactController();
        router.get('/', reactController.getReact);
        router.get('/:id', reactController.getReactById);
        router.post('/', reactController.createReact);
        router.put('/:id', reactController.updateReact);
        router.delete('/:id', reactController.deleteReact);
        return router;
    }
}
exports.ReactRoutes = ReactRoutes;
