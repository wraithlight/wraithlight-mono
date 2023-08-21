import { Nullable } from "@wraithlight/core.types";
import { ServerNotifierConfigReader } from "@wraithlight/common.environment-static.server";
import { getEnvironmentType } from "@wraithlight/core.env";
import { createTransport } from "nodemailer";

export class NodemailerFacadeService {

    private static _instance: Nullable<NodemailerFacadeService>;
    private _config = ServerNotifierConfigReader.getInstance(getEnvironmentType());
    private _transporter = createTransport({
        host: this._config.get(m => m.emailSending.smpt.host),
        port: this._config.get(m => m.emailSending.smpt.port),
        secure: this._config.get(m => m.emailSending.smpt.secure),
        auth: {
            user: this._config.get(m => m.emailSending.smpt.auth.user),
            pass: this._config.get(m => m.emailSending.smpt.auth.pass)
        }
    });

    public static getInstance(): NodemailerFacadeService {
        if (!this._instance) {
            this._instance = new NodemailerFacadeService();
        }
        return this._instance;
    }

    public async sendMail(
        to: string,
        subject: string,
        content: string,
        isHtml: boolean
    ): Promise<void> {
        await this._transporter.sendMail({
            from: this._config.get(m => m.emailSending.fromAddress),
            to,
            subject,
            html: isHtml ? content : undefined,
            text: isHtml ? undefined : content
        });
    }

}
