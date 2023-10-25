"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLineLinkRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class UserLineLinkRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const userLineLinkController = new controller_1.UserLineLinkController();
        router.get('/', userLineLinkController.getUserLineLink);
        router.get('/:id', userLineLinkController.getUserLineLinkById);
        router.post('/', userLineLinkController.createUserLineLink);
        router.put('/:id', userLineLinkController.updateUserLineLink);
        router.delete('/:id', userLineLinkController.deleteUserLineLink);
        return router;
    }
}
exports.UserLineLinkRoutes = UserLineLinkRoutes;
