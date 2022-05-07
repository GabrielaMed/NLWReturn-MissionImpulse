import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9a92070adcf970",
    pass: "de4d84f8e2f3aa"
  }
});

export class NodemailerAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Gabriela M. <gabrielamedeiros998@gmail.com>',
    subject,
    html: body,
  });

  };
}