import { ServerRoute } from '@hapi/hapi';

class GetUser {
  public route: ServerRoute;

  public constructor() {
    this.route = {
      method: 'GET',
      path: '/user',
      handler: () => 'Get USER',
    };
  }
}

export default new GetUser().route;
