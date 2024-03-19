import { SharedNotifierConfigReader } from "@wraithlight/common.environment-static.shared";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { NOTIFIER_ENDPOINT_CONST } from "@wraithlight/core.notifier.const";
import { createUrl } from "@wraithlight/core.url";

export class NotifierServiceConfig {

    private readonly _notifierSharedReader = SharedNotifierConfigReader
        .getInstance(CoreEnvironment.getEnvironmentType());

    public getSendMailV1Url(): string {
        const baseUrl = this._notifierSharedReader.get(m => m.server.baseUrl);
        const port = this._notifierSharedReader.get(m => m.server.port);
        const pathRoot = NOTIFIER_ENDPOINT_CONST.v1.send.root;
        const path = NOTIFIER_ENDPOINT_CONST.v1.send.mail;
        return `${createUrl(baseUrl, port)}${pathRoot}${path}`;
    }

}
