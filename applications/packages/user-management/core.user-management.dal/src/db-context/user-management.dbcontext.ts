import { DbContext, DbSet } from "@wraithlight/core.orm";

import { SessionDbo } from "./dbo";

export class UserManagementDbContext extends DbContext {

    public readonly Applications = new DbSet(this, "Application");
    public readonly Sessions = new DbSet<SessionDbo>(this, "Session");
    public readonly UsersApplications = new DbSet(this, "UserApplication");
    public readonly Users = new DbSet(this, "User");

}
