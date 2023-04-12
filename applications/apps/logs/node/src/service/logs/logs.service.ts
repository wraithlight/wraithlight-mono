import { ApplicationName, LogSeverity } from "@wraithlight/core.logs-common";
import { LogsDbo, LogsRepository } from "../../repository";

export class LogsService {

    private readonly _logsRepository = new LogsRepository();

    public async log(
        severity: LogSeverity,
        application: ApplicationName,
        message: string,
        logDate: Date,
        additionalFields?: string
    ): Promise<void> {
        const entry: LogsDbo = {
            id: 0,
            severity: severity,
            application: application,
            message: message,
            logDate: logDate,
            additionalFields: additionalFields
        };
        await this._logsRepository.insert(entry);
    }

}
