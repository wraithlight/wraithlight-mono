import { ApiTokenHeader } from "@wraithlight/common.api-token.sdk-server";
import { BadRequestError, InternalServerError, UnauthorizedError } from "@wraithlight/core.errors";
import { EXTERNAL_API_ENDPOINTS } from "@wraithlight/core.health-checker.constants";
import {
  HCHealthResultV1Model,
  HCMetricsResultV1Model
} from "@wraithlight/core.health-checker.types";
import {
  BaseController,
  BaseControllerResult,
  HttpDecorators
} from "@wraithlight/core.node.evo";
import {
  ApiToken
} from "@wraithlight/core.node.evo-utils";
import { isEmptyStringOrNil } from "@wraithlight/core.nullable";

import { HealthCheckV1Service } from "../service";
import { HC_HEALTH_TOKENS_KEY, HC_METRICS_TOKENS_KEY, TokenDictionary } from "../set-token";


@HttpDecorators.httpController(EXTERNAL_API_ENDPOINTS.v1.root)
export class HealthCheckControllerV2 extends BaseController {

  private readonly _healthService: HealthCheckV1Service;
  private readonly _tokenDictionary = TokenDictionary.getInstance();

  constructor(
    appName: string,
    appVersion: string
  ) {
    super();
    this._healthService = new HealthCheckV1Service(
      appName,
      appVersion
    );
  }

  @HttpDecorators.httpGet(EXTERNAL_API_ENDPOINTS.v1.health.forServer)
  public health(
    @ApiToken() token: string
  ): BaseControllerResult<HCHealthResultV1Model> {
    if (isEmptyStringOrNil(token)) {
      throw new BadRequestError();
    }
    if (!this._tokenDictionary.has(HC_HEALTH_TOKENS_KEY)) {
      throw new InternalServerError();
    }
    const tokens = this._tokenDictionary.get(HC_HEALTH_TOKENS_KEY);
    if (!tokens.includes(token)) {
      throw new UnauthorizedError();
    }
    const health = this._healthService.getHealth();
    return this.ok(health);
  }

  @HttpDecorators.httpGet(EXTERNAL_API_ENDPOINTS.v1.metrics.forServer)
  @ApiTokenHeader(["metrics-token"])                      // TODO: From configuration
  public metrics(
    @ApiToken() token: string
  ): BaseControllerResult<HCMetricsResultV1Model> {
    if (isEmptyStringOrNil(token)) {
      throw new BadRequestError();
    }
    if (!this._tokenDictionary.has(HC_METRICS_TOKENS_KEY)) {
      throw new InternalServerError();
    }
    const tokens = this._tokenDictionary.get(HC_METRICS_TOKENS_KEY);
    if (!tokens.includes(token)) {
      throw new UnauthorizedError();
    }
    const metrics = this._healthService.getMetrics();
    this._healthService.resetState();
    return this.ok(metrics);
  }

}
