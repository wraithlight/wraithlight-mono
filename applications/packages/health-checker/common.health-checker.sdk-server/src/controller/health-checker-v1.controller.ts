import { ApiTokenHeader } from "@wraithlight/common.api-token.sdk-server";
import { EXTERNAL_API_ENDPOINTS } from "@wraithlight/core.health-checker.constants";
import { BaseController, HttpController, HttpGet } from "@wraithlight/core.node";

import { HealthCheckV1Service } from "../service";

@HttpController(EXTERNAL_API_ENDPOINTS.v1.root)
export class HealthCheckControllerV1 extends BaseController {

    private readonly _healthService: HealthCheckV1Service;

    constructor(
        appName: string,
        appVersion: string
    ) {
        super();
        this._healthService = new HealthCheckV1Service(appName, appVersion);
    }

    @HttpGet(EXTERNAL_API_ENDPOINTS.v1.health.forServer)
    @ApiTokenHeader(["health-token"])                       // TODO: From configuration
    public health(): void {
        const health = this._healthService.getHealth();
        return this.ok(health);
    }

    @HttpGet(EXTERNAL_API_ENDPOINTS.v1.metrics.forServer)
    @ApiTokenHeader(["metrics-token"])                      // TODO: From configuration
    public metrics(): void {
        const metrics = this._healthService.getMetrics();
        this._healthService.resetState();
        return this.ok(metrics);
    }

}
