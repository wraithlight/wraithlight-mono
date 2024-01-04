import {
    BaseController,
    HttpController,
    HttpGet,
    HttpPost
} from "@wraithlight/core.node";
import {
    LOGS_COLLECTOR_API_ENDPOINTS
} from "@wraithlight/core.logs-collector.constants";
import { RequireApiToken } from "../decorator";

@HttpController(LOGS_COLLECTOR_API_ENDPOINTS.v1.log.root)
export class LogController extends BaseController {

    @RequireApiToken("WRITE")
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.log.put)
    public async putLog(): Promise<void> {

    }

    @RequireApiToken("READ")
    @HttpGet(LOGS_COLLECTOR_API_ENDPOINTS.v1.log.list)
    public async getLogs(): Promise<void> {

    }

}
