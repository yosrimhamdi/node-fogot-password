import crypto from 'crypto';

class Token {
  static generate() {
    return crypto.randomBytes(32).toString('hex');
  }

  static hash(token) {
    crypto.createHash('sha256').update(token).digest('hex');
  }

  static valid(expiresIn) {
    return expiresIn < Date.now() + 10 * 60 * 1000;
  }
}

export default Token;
