"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComunityRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ComunityRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const comunityController = new controller_1.ComunityController();
        router.get('/', comunityController.getCommunities);
        router.get('/:id', comunityController.getCommunityById);
        router.post('/', comunityController.createCommunity);
        router.put('/:id', comunityController.updateComunity);
        router.delete('/:id', comunityController.deleteComunity);
        return router;
    }
}
exports.ComunityRoutes = ComunityRoutes;
