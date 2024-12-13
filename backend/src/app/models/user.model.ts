import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import IUser from '../types/user.type';

// Define the user schema
const userSchema = new mongoose.Schema<IUser>({
  name :{
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
  },
  emailVerified: {
    type: Boolean,
    required: false,
    default: false,
  },
  password: {
    type: String,
    required: false,
    minlength: 1,
    default: "",
  },
  image: {
    type: String,
    required: false,
    default: ""
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    required: true,
  }
}, {
  timestamps: true,
});

// Hash the password before saving
userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create the User model
const User = mongoose.model<IUser>('User', userSchema);

export default User;