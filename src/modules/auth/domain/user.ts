import { randomUUID } from 'crypto';
interface IUser {
  firstname: string;
  lastname: string;
  password: string;
}

export default class User{
  readonly firstname: string;
  readonly lastname: string;
  readonly password: string;
  readonly username: string;
  readonly identfier = randomUUID();

  constructor(user: IUser) {
    Object.assign(this, user);
  }
}
