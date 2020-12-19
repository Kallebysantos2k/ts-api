import Ava, { TestInterface } from 'ava';
import { MongoMemoryServer } from 'mongodb-memory-server';

import MongooseProvider from '../../providers/implementations/MongooseProvider';
import { IDatabaseProvider } from '../../providers/IDatabaseProvider';

const It = Ava as TestInterface<{
  provider: IDatabaseProvider,
  memory: MongoMemoryServer,
}>;

It.before('Starts a temporary memory cache', async (exec) => {
  const shared = exec.context;
  shared.provider = MongooseProvider;
  shared.memory = new MongoMemoryServer();
  const uri: string = await shared.memory.getUri();

  await shared.provider.connect(uri);
});

It.after.always('Closing memory cache', (exec) => {
  exec.context.provider.disconnect();
  exec.context.memory.stop();
});

It('Should create user', (t) => {
  t.pass();
});
