import { ServerRoute } from '@hapi/hapi';
import userRoutes from '@routes/user.routes';

const routes: ServerRoute[] = [
  ...userRoutes,
];

export default routes;
