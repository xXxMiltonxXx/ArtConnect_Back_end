"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ProductRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const productController = new controller_1.ProductController();
        router.get('/', productController.getProduct);
        router.get('/:id', productController.getProductById);
        router.post('/', productController.createProduct);
        router.put('/:id', productController.updateProduct);
        router.delete('/:id', productController.deleteProduct);
        return router;
    }
}
exports.ProductRoutes = ProductRoutes;
