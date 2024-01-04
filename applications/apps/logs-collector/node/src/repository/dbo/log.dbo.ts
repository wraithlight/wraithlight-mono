export interface LogDbo {
    id: number;
    severity: string;
    applicationId: number;
    message: string;
    logDate: Date;
}
