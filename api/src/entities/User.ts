import { uuid } from 'uuidv4';
import { IUser } from '@entities/IUser';

const User = (props: Omit<IUser, 'id'>, id?: string): IUser => ({
  id: (id) || uuid(),
  ...props,
});

export default User;
