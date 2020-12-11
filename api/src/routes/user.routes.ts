import { ServerRoute } from '@hapi/hapi';

export const get = (): ServerRoute => ({
  method: 'GET',
  path: '/user',
  handler: () => 'Rota get User',
});

export const userRoutes = [
  get(),
];
