import { UserManagementDbContext } from "./user-management.dbcontext";

export class UserManagementDbContextFactory {

    private static _instance: UserManagementDbContextFactory;
    private readonly _dbContextInstance: UserManagementDbContext;

    private constructor(
        host: string,
        port: number,
        username: string,
        password: string,
        database: string,
        usePolling: boolean
    ) {
        this._dbContextInstance = new UserManagementDbContext(
            host,
            port,
            username,
            password,
            database,
            usePolling
        );
    }

    public static initialize(
        host: string,
        port: number,
        username: string,
        password: string,
        database: string,
        usePolling: boolean
    ) {
        this._instance = new UserManagementDbContextFactory(
            host,
            port,
            username,
            password,
            database,
            usePolling
        );
    }

    public static getInstance(): UserManagementDbContextFactory {
        return this._instance;
    }

    public getDbContext(): UserManagementDbContext {
        return this._dbContextInstance;
    }

}
