import { ServerRoute } from '@hapi/hapi';
import CreateUserUCRoutes from '@useCases/CreateUser/CreateUserUC.routes';

const userRoutes: ServerRoute[] = [
  CreateUserUCRoutes,
];

export default userRoutes;
