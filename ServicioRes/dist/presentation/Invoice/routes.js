"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class InvoiceRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const invoiceController = new controller_1.InvoiceController();
        router.get('/', invoiceController.getInvoices);
        router.get('/:id', invoiceController.getInvoiceById);
        router.post('/', invoiceController.createInvoice);
        router.put('/:id', invoiceController.updateInvoice);
        router.delete('/:id', invoiceController.deleteInvoice);
        return router;
    }
}
exports.InvoiceRoutes = InvoiceRoutes;
