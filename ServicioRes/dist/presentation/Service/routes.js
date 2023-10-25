"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ServiceRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const serviceController = new controller_1.ServiceController();
        router.get('/', serviceController.getServices);
        router.get('/:id', serviceController.getServiceById);
        router.post('/', serviceController.createService);
        router.put('/:id', serviceController.updateService);
        router.delete('/:id', serviceController.deleteService);
        return router;
    }
}
exports.ServiceRoutes = ServiceRoutes;
