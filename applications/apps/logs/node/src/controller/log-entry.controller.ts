import { LOGGER_API_ENDPOINTS } from "@wraithlight/core.logs.constant";
import { BeaconLogEntry } from "@wraithlight/core.logs.types";
import {
  BaseController,
  HttpController,
  HttpPost
} from "@wraithlight/core.node";

import { LogsService } from "../service";

@HttpController(LOGGER_API_ENDPOINTS.v1.logs.root)
export class LogsEntryController extends BaseController {

  private readonly _logsService = new LogsService();

  @HttpPost(LOGGER_API_ENDPOINTS.v1.logs.create)
  public async logEntry(dto: BeaconLogEntry): Promise<void> {
    await this._logsService.log(
      dto.severity,
      dto.data,
      dto.applicationName
    );
    super.created();
  }

}
