import nodemailer from 'nodemailer';

class Mailer {
  constructor() {
    const { MAIL_HOST, MAIL_USER, MAIL_PASSWORD, MAIL_PORT } = process.env;

    this.transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT,
      secure: false,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
      },
    });
  }

  sendResetPassword(token) {
    const options = {
      from: '"Fred Foo 👻" <foo@example.com>',
      to: 'bar@example.com, baz@example.com',
      subject: 'Hello ✔',
      text: 'Hello world?',
      html: `<a href="/password/reset/${token}">click</a>`,
    };

    this.transporter.sendMail(options);
  }
}

export default Mailer;
