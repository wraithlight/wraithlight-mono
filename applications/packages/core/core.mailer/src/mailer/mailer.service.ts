import { NodemailerFacadeService } from "@wraithlight/facade.nodemailer";

export class MailerService {

    private readonly _service = new NodemailerFacadeService(
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
        private readonly _password: string,
        private readonly _fromAddress: string
    ) { }

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
            undefined,
            htmlText,
            // TODO: Align the SDK to `ReadonlyArray<string>`
            bcc as Array<string>,
            // TODO: Align the SDK to `ReadonlyArray<string>`
            cc as Array<string>
        );
    }

}
