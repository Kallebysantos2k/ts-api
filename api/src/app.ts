import Hapi from '@hapi/hapi';
import dotenv from 'dotenv';
import routes from './routes/routes';

class App {
  public server: Hapi.Server;

  public constructor() {
    dotenv.config();
    this.server = new Hapi.Server({
      port: process.env.APP_PORT,
      host: process.env.APP_HOST,
    });

    this.server.route(routes);
  }
}

export default new App().server;
