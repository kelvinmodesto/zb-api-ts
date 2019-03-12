import { Router } from 'express';

// Database
import { ContextStrategy as Context } from '../db/base/contextStrategy';
import { MongoDBStrategy as MongoDB } from '../db/mongodb/mongoDBStrategy';

// Controller
import { ProductController } from '../controllers/productController';

// Model list
import user from '../models/user';

const context = new Context(new MongoDB(MongoDB.connect(), user));
const productsRouter = () => {
  const productController = new ProductController(Router(), context);

  return productController.router;
};

export default productsRouter;
