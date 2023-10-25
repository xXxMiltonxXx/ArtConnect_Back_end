"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ForoRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const foroController = new controller_1.ForoController();
        router.get('/', foroController.getForo);
        router.get('/:id', foroController.getForoById);
        router.post('/', foroController.createForo);
        router.put('/:id', foroController.updateForo);
        router.delete('/:id', foroController.deleteForo);
        return router;
    }
}
exports.ForoRoutes = ForoRoutes;
