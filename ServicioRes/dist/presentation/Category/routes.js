"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CategoryRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const categoryController = new controller_1.CategoryController();
        router.get('/', categoryController.getCategory);
        router.get('/:id', categoryController.getCategoryById);
        router.post('/', categoryController.createCategory);
        router.put('/:id', categoryController.updateCategory);
        router.delete('/:id', categoryController.deleteCategory);
        return router;
    }
}
exports.CategoryRoutes = CategoryRoutes;
