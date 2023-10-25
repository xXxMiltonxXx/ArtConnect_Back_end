"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvLineProRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class InvLineProRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const invLineProController = new controller_1.InvLineProController();
        router.get('/', invLineProController.getInvLinePro);
        router.get('/:id', invLineProController.getInvLineProById);
        router.post('/', invLineProController.createInvLinePro);
        router.put('/:id', invLineProController.updateInvLinePro);
        router.delete('/:id', invLineProController.deleteInvLinePro);
        return router;
    }
}
exports.InvLineProRoutes = InvLineProRoutes;
