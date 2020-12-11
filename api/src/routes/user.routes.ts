import { ServerRoute } from '@hapi/hapi';
import GetUser from './user/get.routes';

class UserRoutes {
  public routes: ServerRoute[];

  public constructor() {
    this.routes = [
      GetUser,
    ];
  }
}

export default new UserRoutes().routes;
