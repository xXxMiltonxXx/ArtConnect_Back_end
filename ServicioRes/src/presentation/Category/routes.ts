import { Router } from 'express';
import { CategoryController } from './controller';

export class CategoryRoutes {
  static get routes(): Router {
    const router = Router();
    const categoryController = new CategoryController();
    router.get('/', categoryController.getCategory);
    router.get('/:id', categoryController.getCategoryById );
    router.post('/', categoryController.createCategory );
    router.put('/:id', categoryController.updateCategory );
    router.delete('/:id', categoryController.deleteCategory );
    return router;
  }
}

