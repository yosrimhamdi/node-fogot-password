import User from '../models/User.js';
import Mailer from '../mail/Mailer.js';

export default async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const token = await user.setupToken();

  // const mailer = new Mailer();

  // mailer.sendResetPassword(token);

  res.render('forgotPassword');
};
