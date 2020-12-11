import { ServerRoute } from '@hapi/hapi';
import userRoutes from './user.routes';

class Routes {
  public routes: ServerRoute[];

  public constructor() {
    this.routes = [
      ...userRoutes,
    ];
  }
}

export default new Routes().routes;
