"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowersRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class FollowersRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const followerController = new controller_1.FollowerController();
        router.get('/', followerController.getFollowers);
        router.get('/:id', followerController.getFollowerById);
        router.post('/', followerController.createFollower);
        router.put('/:id', followerController.updateFollower);
        router.delete('/:id', followerController.deleteFollower);
        return router;
    }
}
exports.FollowersRoutes = FollowersRoutes;
