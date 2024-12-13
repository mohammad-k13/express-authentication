import { Document } from 'mongoose';

interface IUser extends Document {
  name: string,
  emailVerified: boolean,
  username: string;
  email: string;
  password: string;
  role: "admin" | "user",
  image:string,

  //methods
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export default IUser;