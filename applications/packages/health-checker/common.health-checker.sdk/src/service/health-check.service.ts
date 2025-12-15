import { EXTERNAL_API_ENDPOINTS } from "@wraithlight/core.health-checker.constants";
import {
  HCHealthResultV1Model,
  HCMetricsResultV1Model
} from "@wraithlight/core.health-checker.types";
import { isNil } from "@wraithlight/framework.nullable";
import { OperationResult, OperationResultFactory } from "@wraithlight/framework.operation-result";

import { HealthCheckClient } from "../client";

import { ERROR_CODES } from "./health-check.const";

export class HealthCheckService {

  private readonly _client: HealthCheckClient;

  constructor(
    baseUrl: string,
    token: string
  ) {
    this._client = new HealthCheckClient(
      baseUrl,
      token
    );
  }

  public async checkHealth(
  ): Promise<OperationResult<HCHealthResultV1Model>> {
    const result = await this._client
      .health(EXTERNAL_API_ENDPOINTS.v1.health.forClient);
    if (isNil(result)) {
      return OperationResultFactory.error(ERROR_CODES.HEALTH_FAIL);
    }

    return OperationResultFactory.success(result);
  }

  public async checkMetrics(
  ): Promise<OperationResult<HCMetricsResultV1Model>> {
    const result = await this._client
      .metrics(EXTERNAL_API_ENDPOINTS.v1.metrics.forClient);
    if (isNil(result)) {
      return OperationResultFactory.error(ERROR_CODES.METRICS_FAIL);
    }

    return OperationResultFactory.success(result);
  }

}
