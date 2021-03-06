import { Router } from 'express';

// Database
import { ContextStrategy as Context } from '../db/base/contextStrategy';
import { MongoDBStrategy as MongoDB } from '../db/mongodb/mongoDBStrategy';

// Controller
import { UserController } from '../controllers/userController';

// Model list
import user from '../models/user';

const context = new Context(new MongoDB(MongoDB.connect(), user));
const usersRouter = () => {
  const userController = new UserController(Router(), context);

  return userController.router;
};

export default usersRouter;
