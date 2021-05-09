import User from '../../models/User.js';

export default async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const token = await user.setupToken();

  res.json({ token });
};
