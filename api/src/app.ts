import Hapi from '@hapi/hapi';

class App {
  public server: Hapi.Server;

  public constructor() {
    this.server = new Hapi.Server({
      port: 3333,
    });

    this.routes();
  }

  private routes(): void {
    this.server.route({
      method: 'GET',
      path: '/',
      handler: () => 'Hello World!',
    });
  }
}

export default new App().server;
