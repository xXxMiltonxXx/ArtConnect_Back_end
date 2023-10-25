"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CommentRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const commentController = new controller_1.CommentController();
        router.get('/', commentController.getComment);
        router.get('/:id', commentController.getCommentById);
        router.post('/', commentController.createComment);
        router.put('/:id', commentController.updateComment);
        router.delete('/:id', commentController.deleteComment);
        return router;
    }
}
exports.CommentRoutes = CommentRoutes;
