import crypto from 'crypto';

class Token {
  static generate() {
    return crypto.randomBytes(32).toString('hex');
  }

  static hash(token) {
    return crypto.createHash('sha256').update(token).digest('hex');
  }
}

export default Token;
