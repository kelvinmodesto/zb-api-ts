import jsonwebtoken from 'jsonwebtoken';

export class LoginController {
  public router: any;
  constructor(router: any) {
    this.router = router;
  }

  public init() {
    // list all routes
    this.login();
    this.logout();
  }
  public login() {
    this.router.post('/login', (req: any, res: any, next: any) => {
      try {
        const body = req.body;
      } catch (error) {
        next(error);
      }
    });
  }
  public logout() {
    this.router.post('/logout', (req: any, res: any, next: any) => {
      try {
        const body = req.body;
      } catch (error) {
        next(error);
      }
    });
  }
}
