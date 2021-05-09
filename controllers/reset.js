import User from '../models/User.js';
import Token from '../utilities/Token.js';

export default async (req, res) => {
  const { password } = req.body;

  const hashedToken = Token.hash(req.params.token);

  const user = await User.findOne({
    token: hashedToken,
    expiresIn: { $gt: Date.now() },
  });

  if (user) {
    await user.handlePasswordChange(password);

    res.send(`password changed to ${password}`);
  } else {
    res.send('error');
  }
};
