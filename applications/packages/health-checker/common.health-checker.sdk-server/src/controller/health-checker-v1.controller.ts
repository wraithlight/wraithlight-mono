import { BaseController, HttpController, HttpGet } from "@wraithlight/core.node";
import { EXTERNAL_API_ENDPOINTS } from "@wraithlight/core.health-checker.constants";
import { LoggerService } from "@wraithlight/common.logger.sdk";
import { HttpCode } from "@wraithlight/core.http";

import {
    HealthCheckTokenV1Service,
    HealthCheckV1Service
} from "../service";

import { TokenValidator } from "./validation";
import { HealthCheckMessageBusV1Service } from "../sdk";

@HttpController(EXTERNAL_API_ENDPOINTS.v1.root)
export class HealthCheckControllerV1 extends BaseController {

    private readonly _logger = LoggerService.getInstance();
    private readonly _tokenValidator = new TokenValidator();
    private readonly _healthService = new HealthCheckV1Service();
    private readonly _tokenService = new HealthCheckTokenV1Service(this._token);

    constructor(
        private readonly _token: string
    ) {
        super();
    }

    @HttpGet(EXTERNAL_API_ENDPOINTS.v1.health.forServer)
    public health(token: string): void {
        HealthCheckMessageBusV1Service.getInstance().addError();
        const path = EXTERNAL_API_ENDPOINTS.v1.health.forServer;
        this._logger.info(`GET on ${path}`);
        const validationResult = this._tokenValidator.validate({ token });
        if (!validationResult[0].success) {
            this._logger.error(`GET on ${path} ${HttpCode.BadRequest}`);
            return this.badRequest(validationResult[0]);
        }
        const isTokenValid = this._tokenService.isTokenValid(token);
        if (!isTokenValid) {
            this._logger.error(`GET on ${path} ${HttpCode.Unauthorized}`);
            return this.unauthorized();
        }
        this._logger.info(`GET on ${path}`);
        return this.ok();
    }

    @HttpGet(EXTERNAL_API_ENDPOINTS.v1.metrics.forServer)
    public metrics(token: string): void {
        const path = EXTERNAL_API_ENDPOINTS.v1.metrics.forServer;
        this._logger.info(`GET on ${path}`);
        const validationResult = this._tokenValidator.validate({ token });
        if (!validationResult[0].success) {
            this._logger.error(`GET on ${path} ${HttpCode.BadRequest}`);
            return this.badRequest(validationResult[0]);
        }
        const isTokenValid = this._tokenService.isTokenValid(token);
        if (!isTokenValid) {
            this._logger.error(`GET on ${path} ${HttpCode.Unauthorized}`);
            return this.unauthorized();
        }
        const metrics = this._healthService.getMetrics();
        this._healthService.resetState();
        this._logger.info(`GET on ${path} ${HttpCode.Ok}`);
        return this.ok(metrics);
    }

}

