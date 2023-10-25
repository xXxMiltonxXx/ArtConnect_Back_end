"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class AnswerRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const answerController = new controller_1.AnswerController();
        router.get('/', answerController.getAnswer);
        router.get('/:id', answerController.getAnswerById);
        router.post('/', answerController.createAnswer);
        router.put('/:id', answerController.updateAnswer);
        router.delete('/:id', answerController.deleteAnswer);
        return router;
    }
}
exports.AnswerRoutes = AnswerRoutes;
