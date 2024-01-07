import {
    LOGS_COLLECTOR_API_ENDPOINTS
} from "@wraithlight/core.logs-collector.constants";
import {
    BaseController,
    HttpController,
    HttpGet,
    HttpPost
} from "@wraithlight/core.node";

import { TokenType } from "../_internal";
import { RequireApiToken } from "../decorator";

@HttpController(LOGS_COLLECTOR_API_ENDPOINTS.v1.log.root)
export class LogController extends BaseController {

    @RequireApiToken(TokenType.WRITE)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.log.put)
    public async putLog(): Promise<void> {
        // TODO: Finish.
        return this.created();
    }

    @RequireApiToken(TokenType.WRITE)
    @HttpGet(LOGS_COLLECTOR_API_ENDPOINTS.v1.log.list)
    public async getLogs(): Promise<void> {
        // TODO: Finish.
        return this.ok();
    }

}
