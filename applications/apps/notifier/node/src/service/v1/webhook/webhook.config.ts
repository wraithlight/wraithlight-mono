import { NOTIFIER_WEBHOOK_ENDPOINTS } from "@wraithlight/core.notifier.const";

export class WebhookConfigService {

    constructor(
        private readonly _baseApiUrl: string
    ) { }

    public getStartV1Endpoint(): string {
        return `${this._baseApiUrl}${NOTIFIER_WEBHOOK_ENDPOINTS.v1.webhooks.mail.processingStarted}`;
    }

    public getSuceedV1Endpoint(): string {
        return `${this._baseApiUrl}${NOTIFIER_WEBHOOK_ENDPOINTS.v1.webhooks.mail.processingSucceeded}`;
    }

    public getFailV1Endpoint(): string {
        return `${this._baseApiUrl}${NOTIFIER_WEBHOOK_ENDPOINTS.v1.webhooks.mail.processingFailed}`;
    }

    public getDoneV1Endpoint(): string {
        return `${this._baseApiUrl}${NOTIFIER_WEBHOOK_ENDPOINTS.v1.webhooks.mail.processingDone}`;
    }

}
