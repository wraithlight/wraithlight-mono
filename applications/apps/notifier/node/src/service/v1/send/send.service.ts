import { CqrsService } from "@wraithlight/core.cqrs";
import { Guid } from "@wraithlight/core/core.types";
import { LoggerService } from "@wraithlight/common.logger.sdk";

import { SendEmailModelV1 } from "./send.model";
import { NodemailerFacadeService } from "../../../nodemailer";

export class SendServiceV1 {

    private readonly _logger = LoggerService.getInstance();
    private readonly _nodemailerFacade = NodemailerFacadeService.getInstance();
    private readonly _cqrsService = new CqrsService<SendEmailModelV1>((item, id) => this.sendWorker(item, id));

    public send(
        address: string,
        subject: string,
        content: string,
        isHtml: boolean
    ): Guid {
        return this._cqrsService.addItem({
            address,
            subject,
            content,
            isHtml
        }) as Guid; // TODO: Fix this once ESM build has been added.
    }

    private async sendWorker(item: SendEmailModelV1, id: Guid): Promise<void> {
        this._logger.warn(`Entry with id '${id}' is being processed!`);
        try {
            await this._nodemailerFacade.sendMail(item.address, item.subject, item.content, item.isHtml);
            this._logger.warn(`Entry with id '${id}' has been processed succesfully!`);
        } catch (e: unknown) {
            this._logger.warn(`Entry processing ('${id}') has been failed`, JSON.stringify(e));
        }
    }

}
