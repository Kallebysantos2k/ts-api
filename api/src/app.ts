import Hapi from '@hapi/hapi';
import routes from './routes/routes';

class App {
  public server: Hapi.Server;

  public constructor() {
    this.server = new Hapi.Server({
      port: 3333,
    });

    this.server.route(routes);
  }
}

export default new App().server;
