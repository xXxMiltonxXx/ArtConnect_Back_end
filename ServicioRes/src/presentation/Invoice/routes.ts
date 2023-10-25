import { Router } from 'express';
import { InvoiceController } from './controller';

export class InvoiceRoutes {
  static get routes(): Router {
    const router = Router();
    const invoiceController = new InvoiceController();
    router.get('/', invoiceController.getInvoices);
    router.get('/:id', invoiceController.getInvoiceById );
    router.post('/', invoiceController.createInvoice);
    router.put('/:id', invoiceController.updateInvoice );
    router.delete('/:id', invoiceController.deleteInvoice );
    return router;
  }
}

