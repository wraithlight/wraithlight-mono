import { LOGS_API_ENDPOINTS } from "@wraithlight/core.logs-common";
import { SERVER_STATIC } from "@wraithlight/core.env-static";

export class LogsClientConfig {

    public getEntryAddUrl(): string {
        return `${this.getEntriesRootUrl}${LOGS_API_ENDPOINTS.entry.add}`;
    }

    private getEntriesRootUrl(): string {
        return `${this.getLogsBaseUrl()}${LOGS_API_ENDPOINTS.entries.root}`;
    }

    private getLogsBaseUrl(): string {
        return `${SERVER_STATIC.logs.address.host}:${SERVER_STATIC.logs.address.port}`;
    }

}
