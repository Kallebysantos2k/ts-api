import { ServerRoute } from '@hapi/hapi';

const CreateUser = (): ServerRoute => ({
  method: 'POST',
  path: '/user',
  handler: () => 'ROTA create user',
});

export default CreateUser();
