import { DbContext, DbSet } from "@wraithlight/core.orm";

import { ApplicationDbo, SessionDbo, UserApplicationDbo, UserDbo } from "./dbo";

export class UserManagementDbContext extends DbContext {

    public readonly Applications = new DbSet<ApplicationDbo>(this, "Application");
    public readonly Sessions = new DbSet<SessionDbo>(this, "Session");
    public readonly UsersApplications = new DbSet<UserApplicationDbo>(this, "UserApplication");
    public readonly Users = new DbSet<UserDbo>(this, "User");

}
