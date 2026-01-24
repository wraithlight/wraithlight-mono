import { Transporter, createTransport } from "nodemailer";

export class NodemailerFacadeService {

  private readonly _transport: Transporter;

  constructor(
    host: string,
    port: number,
    isSecure: boolean,
    username: string,
    password: string
  ) {
    this._transport = createTransport({
      host: host,
      port: port,
      secure: isSecure,
      auth: {
        user: username,
        pass: password
      }
    });
  }

  public async sendMail(
    fromAddress: string,
    toAddress: string,
    subject: string,
    text?: string,
    htmlText?: string,
    bcc: ReadonlyArray<string> = [],
    cc: ReadonlyArray<string> = []
  ): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result: { messageId: string } = await this._transport.sendMail({
      to: toAddress,
      from: fromAddress,
      subject: subject,
      text: text,
      html: htmlText,
      bcc: [...bcc],
      cc: [...cc]
    });
    return result.messageId;
  }

}
