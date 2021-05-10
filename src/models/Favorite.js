import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'profiles',
  },
  stations: {
    type: [Object],
  },
});

export default mongoose.models.Favorite ||
  mongoose.model('Favorite', FavoriteSchema);
