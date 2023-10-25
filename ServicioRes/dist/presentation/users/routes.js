"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class UserRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const userController = new controller_1.UsersController();
        router.get('/', userController.getUsers);
        router.get('/:id', userController.getUserById);
        router.post('/', userController.createUser);
        router.put('/:id', userController.updateUser);
        router.delete('/:id', userController.deleteUser);
        return router;
    }
}
exports.UserRoutes = UserRoutes;
