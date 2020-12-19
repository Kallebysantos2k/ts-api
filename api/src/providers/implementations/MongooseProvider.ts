import Mongoose from 'mongoose';
import { IDatabaseProvider, IDatabaseConfig } from '@providers/IDatabaseProvider';

const MongooseProvider : IDatabaseProvider = {
  generateUri: (config: IDatabaseConfig): string => (
    `mongodb://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`
  ),

  connect: async (uri: string): Promise<void> => {
    const options: Mongoose.ConnectionOptions = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    await Mongoose.connect(uri, options);
    Mongoose.connection.on('error', (err) => console.error(err));
  },

  disconnect: async (): Promise<void> => {
    await Mongoose.disconnect();
  },
};

export default MongooseProvider;
