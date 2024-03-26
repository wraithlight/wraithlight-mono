import { Guid } from "@wraithlight/core.guid";
import { CoreHttpClient, HttpCode } from "@wraithlight/core.http";
import { SendMailRequestV1Model, SendMailResponseV1Model } from "@wraithlight/core.notifier.types";
import { isNil } from "@wraithlight/core.nullable";

import { NotifierServiceConfig } from "./notifier.config";

export class NotifierService extends CoreHttpClient {

    private readonly _config = new NotifierServiceConfig();

    public async sendEmail(
        address: string,
        subject: string,
        content: string,
        isHtml: boolean,
        webhookBaseApiUrl?: string
    ): Promise<Guid> {
        const url = this._config.getSendMailV1Url();
        const data: SendMailRequestV1Model = {
            address,
            subject,
            content,
            isHtml,
            webhookBaseApiUrl
        };
        const result = await this.post<
            SendMailResponseV1Model,
            SendMailRequestV1Model
        >
            (
                url,
                data
            )
        ;
        if (result.statusCode === HttpCode.Ok && !isNil(result.payload)) {
            return result.payload.id;
        } else {
            throw `Sending email has been failed!`;
        }
    }

}
