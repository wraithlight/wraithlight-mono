import { DbContext, DbSet } from "@wraithlight/core.orm";

import {
    ScopeDbo,
    SessionDbo,
    UserDbo,
    UserScopeDbo
} from "../dbo";

export class AuthDbContext extends DbContext {

    public Users = new DbSet<UserDbo>(
        this,
        "User"
    );
    public UserScope = new DbSet<UserScopeDbo>(
        this,
        "UserScope"
    );
    public Scope = new DbSet<ScopeDbo>(
        this,
        "Scope"
    );
    public Session = new DbSet<SessionDbo>(
        this,
        "Session"
    );

}
