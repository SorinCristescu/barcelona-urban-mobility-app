import dbConnect from '../../../../../utils/dbConnect';
import Profile from '../../../../../models/Profile';
import User from '../../../../../models/User';
import Favorite from '../../../../../models/Favorite';
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
    // switch (method) {
    //   case 'DELETE':
    //     try {
    //       const profile = Profile.findOne({ _id: profile_id });
    //       if (!profile) {
    //         return res.status(400).json({ success: false });
    //       }
    //       const existing = !!profile.favorites.find(
    //         (favorite) => favorite._id === favorite_id
    //       );
    //       if (existing) {
    //         await Favorite.deleteOne({ _id: favorite_id });
    //         res.status(200).json({ success: true, data: profile });
    //       }
    //     } catch (error) {
    //       res.status(400).json({ success: false });
    //     }
    //     break;
    //   default:
    //     res.status(400).json({ success: false });
    //     break;
    // }
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
}
