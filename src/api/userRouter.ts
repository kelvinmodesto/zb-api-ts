import { Router } from 'express';

// Database
import * as Context from '../db/base/contextStrategy';
import * as MongoDB from '../db/mongodb/mongoDBStrategy';

// Controller
import * as UserController from '../controllers/userController';

// Model list
import user from '../models/user';

const context = new Context(new MongoDB(MongoDB.connect(), user));
const usersRouter = () => {
  const userController = new UserController(Router(), context);

  return userController.router;
};

export default usersRouter;
