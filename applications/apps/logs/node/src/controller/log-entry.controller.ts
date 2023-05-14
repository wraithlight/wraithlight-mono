import { EntryRequest, LOGS_API_ENDPOINTS } from "@wraithlight/core.logs-common";
import {
    BaseController,
    HttpController,
    HttpPost
} from "@wraithlight/core.node";
import { LogsService } from "../service";

@HttpController(LOGS_API_ENDPOINTS.entry.root)
export class LogsEntryController extends BaseController {

    private readonly _logsService = new LogsService();

    @HttpPost(LOGS_API_ENDPOINTS.entry.add)
    public async logEntry(dto: EntryRequest): Promise<void> {
        await this._logsService.log(
            dto.severity,
            dto.application,
            dto.message,
            dto.logDate,
            dto.additionalFields ?? ""
        );
        super.created();
    }

}
