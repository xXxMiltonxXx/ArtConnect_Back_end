"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class RolRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const rolController = new controller_1.RolController();
        router.get('/', rolController.getRoles);
        router.get('/:id', rolController.getRolById);
        router.post('/', rolController.createRol);
        router.put('/:id', rolController.updateRol);
        router.delete('/:id', rolController.deleteRol);
        return router;
    }
}
exports.RolRoutes = RolRoutes;
