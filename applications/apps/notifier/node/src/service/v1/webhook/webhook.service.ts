import { LoggerService } from "@wraithlight/common.logger.sdk";
import { Guid } from "@wraithlight/core.guid";
import { CoreHttpClient } from "@wraithlight/core.http";
import {
    WebhookRequestFailV1Model,
    WebhookRequestStartV1Model,
    WebhookRequestSucceedV1Model
} from "@wraithlight/core.notifier.types";

import { WebhookConfigService } from "./webhook.config";

export class WebhookService extends CoreHttpClient {

    private readonly _config: WebhookConfigService;
    private readonly _logger = LoggerService.getInstance();

    constructor(
        webhookBaseApiUrl: string
    ) {
        super();
        this._config = new WebhookConfigService(webhookBaseApiUrl);
    }

    public async start(id: Guid): Promise<void> {
        const payload: WebhookRequestStartV1Model = { id };
        await this.post(
            this._config.getStartV1Endpoint(),
            payload
        ).catch(err => this._logger.warn(err));
    }

    public async succeed(id: Guid): Promise<void> {
        const payload: WebhookRequestSucceedV1Model = { id };
        await this.post(
            this._config.getSucceedV1Endpoint(),
            payload
        ).catch(err => this._logger.warn(err));
    }

    public async fail(id: Guid, message: string): Promise<void> {
        const payload: WebhookRequestFailV1Model = { id, error: message };
        await this.post(
            this._config.getFailV1Endpoint(),
            payload
        ).catch(err => this._logger.warn(err));
    }

    public async done(id: Guid): Promise<void> {
        const payload: WebhookRequestStartV1Model = { id };
        await this.post(
            this._config.getDoneV1Endpoint(),
            payload
        ).catch(err => this._logger.warn(err));
    }

}
