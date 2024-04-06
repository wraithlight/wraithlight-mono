import { UserManagementDbContextFactory } from "./db-context/dbcontext.factory";

export function initializeDal(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    usePolling: boolean
): void {
    UserManagementDbContextFactory.initialize(
        host,
        port,
        username,
        password,
        database,
        usePolling
    );
}
