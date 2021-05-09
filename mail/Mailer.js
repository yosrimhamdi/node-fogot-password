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

  sendResetPasswordEmail(token) {
    this.transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: 'bar@example.com, baz@example.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: `<a href="/password/reset/${token}">click</a>`, // html body
    });
  }
}

export default Mailer;
