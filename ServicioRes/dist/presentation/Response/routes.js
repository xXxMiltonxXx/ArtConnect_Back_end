"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ResponseRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const responseController = new controller_1.ResponseController();
        router.get('/', responseController.getResponses);
        router.get('/:id', responseController.getResponseById);
        router.post('/', responseController.createResponse);
        router.put('/:id', responseController.updateResponse);
        router.delete('/:id', responseController.deleteResponse);
        return router;
    }
}
exports.ResponseRoutes = ResponseRoutes;
