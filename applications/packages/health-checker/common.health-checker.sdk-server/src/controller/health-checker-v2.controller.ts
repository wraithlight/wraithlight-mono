import { BadRequestError, UnauthorizedError } from "@wraithlight/core.errors";
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
import { isEmptyStringOrNil } from "@wraithlight/framework.nullable";

import { HealthCheckV1Service } from "../service";
import {
  AppInfoDictionary,
  HC_APPNAME_KEY,
  HC_APPVERSION_KEY,
  HC_HEALTH_TOKENS_KEY,
  HC_METRICS_TOKENS_KEY,
  TokenDictionary
} from "../set-token";

@HttpDecorators.httpController(EXTERNAL_API_ENDPOINTS.v1.root)
export class HealthCheckControllerV2 extends BaseController {

  private readonly _healthService: HealthCheckV1Service;
  private readonly _tokenDictionary = TokenDictionary.getInstance();
  private readonly _appInfoDictionary = AppInfoDictionary.getInstance();

  constructor(
  ) {
    super();

    const appName = this._appInfoDictionary.get(HC_APPNAME_KEY);
    const appVersion = this._appInfoDictionary.get(HC_APPVERSION_KEY);

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
    const tokens = this._tokenDictionary.get(HC_HEALTH_TOKENS_KEY);
    if (!tokens.includes(token)) {
      throw new UnauthorizedError();
    }
    const health = this._healthService.getHealth();
    return this.ok(health);
  }

  @HttpDecorators.httpGet(EXTERNAL_API_ENDPOINTS.v1.metrics.forServer)
  public metrics(
    @ApiToken() token: string
  ): BaseControllerResult<HCMetricsResultV1Model> {
    if (isEmptyStringOrNil(token)) {
      throw new BadRequestError();
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
