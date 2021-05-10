import dbConnect from '../../../../../utils/dbConnect';
import Profile from '../../../../../models/Profile';
import User from '../../../../../models/User';
import { getSession } from 'next-auth/client';

export default async function handler(req, res) {
  const session = await getSession({ req });
  const {
    query: { favorite_id },
    method,
  } = req;
  await dbConnect();
  console.log('from delete', session);
  if (session) {
    switch (method) {
      case 'DELETE':
        try {
          const user = await User.findOne({ email: session.user.email });
          user._id = user._id.toString();

          if (!user) {
            return res.status(400).json({ success: false });
          }
          const profile = Profile.findOne({ user: user._id });
          if (!profile) {
            return res.status(400).json({ success: false });
          }
          const existing = !!profile.favorites.find(
            (favorite) => favorite.id === favorite_id
          );
          if (existing) {
            await Favorite.deleteOne({ id: favorite_id });
            res.status(200).json({ success: true, data: profile });
          }
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
}
