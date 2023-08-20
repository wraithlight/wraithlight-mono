import { CqrsService } from "@wraithlight/core.cqrs";
import { Guid } from "@wraithlight/core/core.types";

import { SendEmailModelV1 } from "./send.model";

export class SendServiceV1 {

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

    private sendWorker(item: SendEmailModelV1, id: Guid) {

    }

}
