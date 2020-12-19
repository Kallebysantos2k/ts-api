import * as Mongoose from 'mongoose';
import It from 'ava';
import { MongoMemoryServer } from 'mongodb-memory-server';

It.before('Starts a temporary memory cache', async () => {
  const Memory = new MongoMemoryServer();
  const uri: string = await Memory.getUri();
  console.log(uri);
  await Mongoose.connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
});

It.after.always('Closing memory cache', () => {
  Mongoose.disconnect();
  // Memory.stop();
});

It('Should create user', (t) => {
  t.pass();
});
