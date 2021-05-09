import User from '../../models/User.js';
import Token from '../../utilities/Token.js';

export default async (req, res) => {
  const hashedToken = Token.hash(req.params.token);

  const user = await User.findOne({ token: hashedToken });

  if (user && Token.valid(user.expiresIn)) {
    await user.clear();

    return res.send(`will change to ${req.body.password}`);
  }

  res.send('error');
};
