import { NodemailerFacadeService } from "@wraithlight/facade.nodemailer";
import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";

export class MailerService {

  private readonly _service: NodemailerFacadeService;

  constructor(
    host: string,
    port: number,
    isSecure: boolean,
    username: string,
    password: string,
    private readonly _fromAddress: string
  ) {
    this._service = new NodemailerFacadeService(
      host,
      port,
      isSecure,
      username,
      password
    );
  }

  public async sendEmail(
    toAddress: string,
    subject: string,
    htmlText: string,
    cc: ReadonlyArray<string> = [],
    bcc: ReadonlyArray<string> = [],
  ): Promise<string> {
    return this._service.sendMail(
      this._fromAddress,
      toAddress,
      subject,
      GLOBAL_UNDEFINED,
      htmlText,
      bcc,
      cc
    );
  }

}
