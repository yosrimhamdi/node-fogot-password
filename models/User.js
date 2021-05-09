import mongoose from 'mongoose';
import Token from '../utilities/Token.js';

const schema = mongoose.Schema({
  email: String,
  password: String,
  token: String,
  expiresIn: Date,
});

schema.methods.setupToken = async function () {
  const token = Token.generate();

  this.token = Token.hash(token);
  this.expiresIn = Date.now() + 10 * 60 * 1000;

  await this.save();

  return token;
};

schema.methods.clear = async function () {
  this.token = undefined;
  this.expiresIn = undefined;

  return this.save();
};

export default mongoose.model('User', schema);
