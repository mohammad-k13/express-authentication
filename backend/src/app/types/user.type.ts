import { Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: "admin" | "user"
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export default IUser;