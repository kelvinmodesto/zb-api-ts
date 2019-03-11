import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  insertedAt:{
    required: true,
    type: Date,
  },
  login:{
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

const user = mongoose.model('user', schema);

export default user;
