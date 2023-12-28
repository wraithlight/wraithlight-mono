import { IMailSender, IMailSenderSendMailResult } from "@wraithlight/core.notifier.types";
import { Nullable } from "@wraithlight/core.nullable";
import { createTransport } from "nodemailer";

export class NodemailerFacadeService implements IMailSender {

    private static _instance: Nullable<NodemailerFacadeService>;
    private readonly _transporter = createTransport({
        host: this._host,
        port: this._port,
        secure: this._secure,
        auth: {
            user: this._authUsername,
            pass: this._authPassword,
        }
    });

    public static getInstance(
        host: string,
        port: number,
        secure: boolean,
        authUsername: string,
        authPassword: string
    ): NodemailerFacadeService {
        if (!this._instance) {
            this._instance = new NodemailerFacadeService(
                host,
                port,
                secure,
                authUsername,
                authPassword
            );
        }
        return this._instance;
    }

    private constructor(
        private readonly _host: string,
        private readonly _port: number,
        private readonly _secure: boolean,
        private readonly _authUsername: string,
        private readonly _authPassword: string
    ) { }

    public async sendEmail(
        toAddress: string,
        fromAddress: string,
        subject: string,
        content: string,
        isHtml = false,
        cc: ReadonlyArray<string> = [],
        bcc: ReadonlyArray<string> = []
    ): Promise<IMailSenderSendMailResult> {
        try {
            await this._transporter.sendMail({
                from: fromAddress,
                to: toAddress,
                subject,
                html: isHtml ? content : undefined,
                text: isHtml ? undefined : content,
                cc: cc as Array<string>,
                bcc: bcc as Array<string>
            });
            return {
                success: true,
                errors: []
            };
        } catch (e: unknown) {
            return {
                success: false,
                errors: [JSON.stringify(e)]
            }
        }
    }
}
