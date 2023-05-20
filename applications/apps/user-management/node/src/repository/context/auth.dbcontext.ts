import { DbContext, DbSet } from "@wraithlight/core.sql";

import {
    UserDbo,
    UserScopeDbo
} from "../dbo";

export class AuthDbContext extends DbContext {

    public Users = new DbSet<UserDbo>(this, "User");
    public UserScope = new DbSet<UserScopeDbo>(this, "UserScope");

}
