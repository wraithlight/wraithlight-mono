import { ApplicationName } from "@wraithlight/core.common-constant";
import { LogSeverity } from "@wraithlight/core.logger.types";
import { dateNow, toUtc } from "@wraithlight/core.types";

import { LogsDbo, LogsRepository } from "../../repository";

export class LogsService {

    private readonly _logsRepository = new LogsRepository();

    public async log(
        severity: LogSeverity,
        message: string,
        application: ApplicationName
    ): Promise<void> {
        const entry: LogsDbo = {
            severity: severity,
            application: application,
            message: message,
            logDate: toUtc(dateNow())
        };
        await this._logsRepository.insert(entry);
    }

}
