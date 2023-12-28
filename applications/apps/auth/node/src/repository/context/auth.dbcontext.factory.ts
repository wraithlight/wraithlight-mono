import { ServerUserManagementConfigReader } from "@wraithlight/common.environment-static.server";
import { CoreEnvironment } from "@wraithlight/core.env";
import { Nullable } from "@wraithlight/core.nullable";

import { AuthDbContext } from "./auth.dbcontext";

export class AuthDbContextFactory {

    private static _dbContext: Nullable<AuthDbContext>;
    private static readonly _configReader = ServerUserManagementConfigReader.getInstance(CoreEnvironment.getEnvironmentType());

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
