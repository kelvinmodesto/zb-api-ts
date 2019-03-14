import { Router } from 'express';

// Controllers
import { LoginController } from '../controllers/loginController';

// Models
import user from '../models/user';

const loginRouter = () => {
  const loginController = new LoginController(Router());

  return loginController.router;
};

export default loginRouter;
