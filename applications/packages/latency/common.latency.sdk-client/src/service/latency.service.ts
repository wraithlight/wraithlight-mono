import { LATENCY_API_ENDPOINTS } from "@wraithlight/core.latency.constants";
import {
    OperationResult,
    OperationResultFactory
} from "@wraithlight/framework.operation-result";

import { LatencyClient } from "../client";

export class LatencyService {

    private readonly _client: LatencyClient;

    constructor(baseUrl = "") {
        this._client = new LatencyClient(baseUrl);
    }

    public async getLatency(): Promise<OperationResult<number>> {
        const path = this.getLatencyPath();
        const start = performance.now();
        const result = await this._client.getLatency(path);
        const end = performance.now();

        if (result) {
            return OperationResultFactory.success(start - end);
        }

        return OperationResultFactory.error("E_GET_LATENCY");
    }

    private getLatencyPath(): string {
        const controller = LATENCY_API_ENDPOINTS.v1.controller;
        const method = LATENCY_API_ENDPOINTS.v1.getLatency;
        return `${controller}${method}`;
    }

}
