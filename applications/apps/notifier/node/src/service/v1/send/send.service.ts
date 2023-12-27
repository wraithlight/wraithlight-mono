import { CqrsService } from "@wraithlight/core.cqrs";
import { Nullable } from "@wraithlight/core.nullable";
import { Guid } from "@wraithlight/core.guid";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { NodemailerFacadeService } from "@wraithlight/common.notifier.nodemailer-sdk";
import { CoreEnvironment } from "@wraithlight/core.env";
import { ServerNotifierConfigReader } from "@wraithlight/common.environment-static.server";
import { IMailSender } from "@wraithlight/core.notifier.types";

import { WebhookableSendEmailModelV1 } from "./send.model";

import { WebhookService } from "../webhook";

export class SendServiceV1 {

    private readonly _logger = LoggerService.getInstance();
    private readonly _config = ServerNotifierConfigReader.getInstance(CoreEnvironment.getEnvironmentType());
    private readonly _nodemailerFacade: IMailSender = NodemailerFacadeService.getInstance(
        this._config.get(m => m.emailSending.smtp.host),
        this._config.get(m => m.emailSending.smtp.port),
        this._config.get(m => m.emailSending.smtp.secure),
        this._config.get(m => m.emailSending.smtp.auth.user),
        this._config.get(m => m.emailSending.smtp.auth.pass)
    );
    private readonly _cqrsService = new CqrsService<WebhookableSendEmailModelV1>((item, id) => this.sendWorker(item, id));

    public send(
        address: string,
        subject: string,
        content: string,
        isHtml: boolean,
        webhookBaseUrl?: string
    ): Guid {
        return this._cqrsService.addItem({
            address,
            subject,
            content,
            isHtml,
            webhookBaseApiUrl: webhookBaseUrl
        })
    }

    private async sendWorker(item: WebhookableSendEmailModelV1, id: Guid): Promise<void> {
        let webhookService: Nullable<WebhookService>;
        if (item.webhookBaseApiUrl) {
            webhookService = new WebhookService(item.webhookBaseApiUrl);
        }
        this._logger.warn(`Entry with id '${id}' is being processed!`);
        webhookService && await webhookService.start(id);
        try {
            await this._nodemailerFacade.sendEmail(
                item.address,
                this._config.get(m => m.emailSending.fromAddress),
                item.subject,
                item.content,
                item.isHtml
            );
            webhookService && await webhookService.succeed(id);
            this._logger.warn(`Entry with id '${id}' has been processed succesfully!`);
        } catch (e: unknown) {
            webhookService && await webhookService.fail(id, JSON.stringify(e));
            this._logger.warn(`Entry processing ('${id}') has been failed`, JSON.stringify(e));
        }
        webhookService && await webhookService.done(id);
    }

}
