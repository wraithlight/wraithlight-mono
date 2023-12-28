import { BaseController, HttpController, HttpPost } from "@wraithlight/core.node";
import { NOTIFIER_ENDPOINT_CONST } from "@wraithlight/core.notifier.const";
import { SendMailRequestV1Model } from "@wraithlight/core.notifier.types";

import { SendServiceV1 } from "../../../service";

@HttpController(NOTIFIER_ENDPOINT_CONST.v1.send.root)
export class SendControllerV1 extends BaseController {

    private readonly _service = new SendServiceV1();

    @HttpPost(NOTIFIER_ENDPOINT_CONST.v1.send.mail)
    public send(
        entry: SendMailRequestV1Model
    ): void {
        const guid = this._service.send(
            entry.address,
            entry.subject,
            entry.content,
            entry.isHtml,
            entry.webhookBaseApiUrl
        );
        return super.ok(guid);
    }

}
