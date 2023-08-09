import { Nullable } from "@wraithlight/core.types";
import { getEnvironment } from "@wraithlight/core.env";
import { ServerUserManagementConfigReader } from "@wraithlight/common.environment-static.server";

import { AuthDbContext } from "./auth.dbcontext";

export class AuthDbContextFactory {

    private static _dbContext: Nullable<AuthDbContext>;
    private static _configReader = ServerUserManagementConfigReader.getInstance(getEnvironment());

    public static getAuthDbContext(): AuthDbContext {
        if (!this._dbContext) {
            this._dbContext = this.createDbContext();
        }
        return this._dbContext;
    }

    private static createDbContext(): AuthDbContext {
        return new AuthDbContext(
            this._configReader.get(x => x.database.host),
            this._configReader.get(x => x.database.port),
            this._configReader.get(x => x.database.username),
            this._configReader.get(x => x.database.password),
            this._configReader.get(x => x.database.database)
        );
    }

}
