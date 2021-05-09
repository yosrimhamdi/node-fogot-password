import User from '../models/User.js';
import Token from '../utilities/Token.js';

export default async (req, res) => {
  const { password } = req.body;

  const hashedToken = Token.hash(req.params.token);

  const user = await User.findOne({ token: hashedToken });

  if (user && Token.valid(user.expiresIn)) {
    await user.handlePasswordChange(password);

    res.send(`password changed to ${password}`);
  } else {
    res.send('error');
  }
};
