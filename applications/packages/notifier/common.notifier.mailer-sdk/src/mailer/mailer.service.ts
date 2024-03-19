import { UNKNOWN_ERROR } from "@wraithlight/core.errors";
import {
    IMailSender,
    IMailSenderSendMailResult
} from "@wraithlight/core.notifier.types";
import {
    NodemailerFacadeService
} from "@wraithlight/facade.nodemailer";

export class MailerService implements IMailSender {

    private readonly _nodemailerFacade = new NodemailerFacadeService(
        this._host,
        this._port,
        this._isSecure,
        this._username,
        this._password
    );

    constructor(
        private readonly _host: string,
        private readonly _port: number,
        private readonly _isSecure: boolean,
        private readonly _username: string,
        private readonly _password: string
    ) {}

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
