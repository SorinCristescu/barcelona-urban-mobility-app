import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
import Profile from '../../../../models/Profile';

export default async function handler(req, res) {
  const {
    query: { profile_id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const user = await User.findOne({ email: profile_id });
        user._id = user._id.toString();

        if (!user) {
          return res.status(400).json({ success: false });
        }

        const profile = await Profile.findOne({ user: user._id });

        if (!profile) {
          await Profile.create({
            user: user,
            favorites: [],
          });

          const profile = await Profile.findOne({ user: user._id });
          res.status(200).json({ success: true, data: profile });
          res.end();
        }

        res.status(200).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }

  res.end();
}
