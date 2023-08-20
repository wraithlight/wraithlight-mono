import { Guid } from "@wraithlight/core.types";
import { HttpClient, HttpCode } from "@wraithlight/core.http";
import { SendMailRequestV1Model, SendMailResponseV1Model } from "@wraithlight/core.notifier.types";
import { NotifierServiceConfig } from "./notifier.config";

export class NotifierService extends HttpClient {

    private readonly _config = new NotifierServiceConfig();

    public async sendEmail(
        address: string,
        subject: string,
        content: string,
        isHtml: boolean
    ): Promise<Guid> {
        const url = this._config.getSendMailV1Url();
        const data: SendMailRequestV1Model = {
            address,
            subject,
            content,
            isHtml
        };
        const result = await this.post<SendMailResponseV1Model, SendMailRequestV1Model>(url, data);
        if (result.statusCode === HttpCode.Ok) {
            return result.payload!.id;
        } else {
            throw `Sending email has been failed!`;
        }
    }

}
