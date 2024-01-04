import {
    BaseController,
    HttpController,
    HttpGet,
    HttpPost,
    HttpDelete
} from "@wraithlight/core.node";
import {
    LOGS_COLLECTOR_API_ENDPOINTS
} from "@wraithlight/core.logs-collector.constants";
import { LoginScope } from "@wraithlight/core.auth.types";
import { Authorize } from "@wraithlight/common.auth-sdk.server";

@HttpController(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.root)
export class ApplicationController extends BaseController {

    @Authorize(LoginScope.LogsCollector)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.create)
    public async create(): Promise<void> {

    }

    @Authorize(LoginScope.LogsCollector)
    @HttpDelete(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.delete.forServer)
    public async delete(): Promise<void> {

    }

    @Authorize(LoginScope.LogsCollector)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.update.forServer)
    public async update(): Promise<void> {

    }

    @Authorize(LoginScope.LogsCollector)
    @HttpGet(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.list)
    public async list(): Promise<void> {

    }

    @Authorize(LoginScope.LogsCollector)
    @HttpGet(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.id.forServer)
    public async details(): Promise<void> {

    }


}
