import { uptime } from "process";

import {
    HCHealthResultV1Model,
    HCMetricsResultV1Model
} from "@wraithlight/core.health-checker.types";

import { HealthCheckMessageBusV1Service } from "../sdk";

import { DEFAULT_STATE } from "./health-checker-v1.const";

export class HealthCheckV1Service {

    private readonly _messageBus = HealthCheckMessageBusV1Service.getInstance();
    private _state = DEFAULT_STATE;

    constructor(
        private readonly _appName: string,
        private readonly _appVersion: string
    ) {
        this._messageBus.subscribeToInfo(() => this.onInfoMetric());
        this._messageBus.subscribeToWarning(() => this.onWarnMetric());
        this._messageBus.subscribeToError(() => this.onErrorMetric());
    }

    public getMetrics(): HCMetricsResultV1Model {
        return this._state;
    }

    public getHealth(): HCHealthResultV1Model {
        return {
            appName: this._appName,
            appVersion: this._appVersion,
            uptime: uptime()
        };
    }

    public resetState(): void {
        this._state = {
            ...DEFAULT_STATE
        };
    }

    private onInfoMetric(): void {
        this._state.numberOfInformationMessages++;
    }

    private onWarnMetric(): void {
        this._state.numberOfWarningMessages++;
    }

    private onErrorMetric(): void {
        this._state.numberOfErrorMessages++;
    }

}
