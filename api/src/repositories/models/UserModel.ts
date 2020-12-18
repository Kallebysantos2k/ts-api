import Mongoose from 'mongoose';

const { Schema } = Mongoose;

const userSchema = new Schema({
  _id: {
    type: Schema.Types.String,
    min: 36,
  },
  name: {
    type: Schema.Types.String,
    min: 3,
    trim: true,
    required: [true, 'Please supply a name'],
  },
  email: {
    type: Schema.Types.String,
    trim: true,
    unique: true,
    uppercase: true,
    required: [true, 'Please supply an email address'],
  },
  password: {
    type: Schema.Types.String,
    min: 5,
    trim: true,
    required: [true, 'Please supply a password'],
  },
  roles: [{
    type: Schema.Types.String,
    enum: ['Programmer', 'GameDesigner', '2dArtist', '3dArtist'],
  }],
});

export default Mongoose.model('user', userSchema);
