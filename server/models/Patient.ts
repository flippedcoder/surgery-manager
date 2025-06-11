import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  birthdate: { type: Date, required: true },
  age: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);

export default User;
