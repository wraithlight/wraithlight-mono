import { UNKNOWN_ERROR } from "@wraithlight/core.errors";
import {
    IMailSender,
    IMailSenderSendMailResult
} from "@wraithlight/core.notifier.types";
import {
    NodemailerFacadeService
} from "@wraithlight/facade.nodemailer";

export class MailerService implements IMailSender {

    private readonly _nodemailerFacade: NodemailerFacadeService;

    constructor(
        host: string,
        port: number,
        isSecure: boolean,
        username: string,
        password: string
    ) {
      this._nodemailerFacade = new NodemailerFacadeService(
        host,
        port,
        isSecure,
        username,
        password
    );
    }

    public async sendEmail(
        toAddress: string,
        fromAddress: string,
        subject: string,
        content: string,
        isHtml?: boolean,
        cc?: ReadonlyArray<string>,
        bcc?: ReadonlyArray<string>
    ): Promise<IMailSenderSendMailResult> {
        return this._nodemailerFacade.sendMail(
            fromAddress,
            toAddress,
            subject,
            undefined,
            content,
            bcc,
            cc
        )
        .then(() => {
            return {
                success: true,
                errors: []
            };
        })
        .catch(() => {
            return {
                success: false,
                errors: [UNKNOWN_ERROR]
            };
        });
    }

}
