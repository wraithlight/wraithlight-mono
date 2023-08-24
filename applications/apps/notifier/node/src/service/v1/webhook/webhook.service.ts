import { HttpClient } from "@wraithlight/core.http";
import { WebhookConfigService } from "./webhook.config";
import { Guid } from "@wraithlight/core.types";
import {
    WebhookRequestFailV1Model,
    WebhookRequestStartV1Model,
    WebhookRequestSucceedV1Model
} from "@wraithlight/core.notifier.types";
import { LoggerService } from "@wraithlight/common.logger.sdk";

export class WebhookService extends HttpClient {

    private readonly _logger = LoggerService.getInstance();
    private readonly _config = new WebhookConfigService(this._webhookBaseApiUrl);

    constructor(
        private readonly _webhookBaseApiUrl: string
    ) {
        super();
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
            this._config.getStartV1Endpoint(),
            payload
        ).catch(err => this._logger.warn(err));
    }

    public async fail(id: Guid, message: string): Promise<void> {
        const payload: WebhookRequestFailV1Model = { id, error: message };
        await this.post(
            this._config.getStartV1Endpoint(),
            payload
        ).catch(err => this._logger.warn(err));
    }

    public async done(id: Guid): Promise<void> {
        const payload: WebhookRequestStartV1Model = { id };
        await this.post(
            this._config.getStartV1Endpoint(),
            payload
        ).catch(err => this._logger.warn(err));
    }

}
