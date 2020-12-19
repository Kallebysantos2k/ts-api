import * as Mongoose from 'mongoose';
import It from 'ava';
import { MongoMemoryServer } from 'mongodb-memory-server';

const Memory = new MongoMemoryServer();

It.before('Starts a temporary memory cache', async () => {
  const uri: string = await Memory.getUri();
  await Mongoose.connect(uri);
});

It.after.always('Closing memory cache', () => {
  Mongoose.disconnect();
  Memory.stop();
});

It('Should create user', (t) => {
  t.pass();
});
