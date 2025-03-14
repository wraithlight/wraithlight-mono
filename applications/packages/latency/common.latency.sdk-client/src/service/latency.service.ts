import { LATENCY_API_ENDPOINTS } from "@wraithlight/core.latency.constants";
import { createFullUrl } from "@wraithlight/core.url";
import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";
import { Timer } from "@wraithlight/framework.timer";

import { LatencyClient } from "../client";

/**
 * @deprecated Use `LatencyService` from `@wraithlight/common.latency.sdk-client-evo`.
 */
export class LatencyService {

  private readonly _client: LatencyClient;

  constructor(baseUrl = "") {
    this._client = new LatencyClient(baseUrl);
  }

  public async getLatency(): Promise<OperationResult<number>> {
    const path = this.getLatencyPath();
    const timer = new Timer();
    timer.start();
    const result = await this._client.getLatency(path);
    const duration = timer.stop();

    if (result) {
      return OperationResultFactory.success(duration);
    }

    return OperationResultFactory.error("E_GET_LATENCY");
  }

  private getLatencyPath(): string {
    const controller = LATENCY_API_ENDPOINTS.v1.controller;
    const method = LATENCY_API_ENDPOINTS.v1.getLatency;
    return createFullUrl(controller, method);
  }

}
