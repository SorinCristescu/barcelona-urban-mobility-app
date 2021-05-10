import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  favorites: {
    type: [Object],
  },
});

export default mongoose.models.Profile ||
  mongoose.model('Profile', ProfileSchema);
