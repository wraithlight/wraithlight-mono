import { MessagebusService } from "@wraithlight/core.messagebus";

import { ERROR_CHANNEL_TOKEN, INFORMATION_CHANNEL_TOKEN, WARNING_CHANNEL_TOKEN } from "./health-check-message-bus-v1.const";

export class HealthCheckMessageBusV1Service {

    private readonly _messageBus = new MessagebusService();
    private static readonly _instance = new HealthCheckMessageBusV1Service();

    public static getInstance(): HealthCheckMessageBusV1Service {
        return this._instance;
    }

    public addInformation(): void {
        this._messageBus.push(INFORMATION_CHANNEL_TOKEN);
    }

    public addWarning(): void {
        this._messageBus.push(WARNING_CHANNEL_TOKEN);
    }

    public addError(): void {
        this._messageBus.push(ERROR_CHANNEL_TOKEN);
    }

    public subscribeToInfo(
        handler: () => void
    ): void {
        this._messageBus.sub(INFORMATION_CHANNEL_TOKEN, handler);
    }

    public subscribeToWarning(
        handler: () => void
    ): void {
        this._messageBus.sub(WARNING_CHANNEL_TOKEN, handler);
    }

    public subscribeToError(
        handler: () => void
    ): void {
        this._messageBus.sub(ERROR_CHANNEL_TOKEN, handler);
    }

}
