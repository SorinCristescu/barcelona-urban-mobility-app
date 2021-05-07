import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import { getSession } from 'next-auth/client';

export default async function handler(req, res) {
  const session = await getSession({ req });
  const {
    query: { id },
    method,
  } = req;
  console.log('req body', req.body);
  if (session) {
    await dbConnect();

    switch (method) {
      case 'GET' /* Get a model by its ID */:
        try {
          console.log('fetch in get method');
          const user = await User.findOne({ email });
          if (!user) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;

      case 'PUT' /* Edit a model by its ID */:
        try {
          console.log('fetch in put method');
          const user = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
          });
          console.log('user db', user);
          if (!user) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;

      // case 'DELETE' /* Delete a model by its ID */:
      //   try {
      //     const deletedUser = await User.deleteOne({ _id: id });
      //     if (!deletedUser) {
      //       return res.status(400).json({ success: false });
      //     }
      //     res.status(200).json({ success: true, data: {} });
      //   } catch (error) {
      //     res.status(400).json({ success: false });
      //   }
      //   break;

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
