import { Guid } from "@wraithlight/core.guid";
import { Nullable } from "@wraithlight/core.nullable";

import { SessionDbo, UserManagementDbContextFactory } from "../../db-context";

export class SessionService {

    private readonly _context = UserManagementDbContextFactory
        .getInstance()
        .getDbContext()
    ;

    public async createSession(

    ): Promise<Nullable<SessionDbo>> {

    }

    public async deleteSessionById(
        id: Guid
    ): Promise<Nullable<SessionDbo>> {
        await this._context.Sessions
            .update("id", id, { isDeleted: true })
            .run()
        ;
        return this.findByIdInternal(id);
    }

    public async findByToken(
        token: Guid
    ): Promise<Nullable<SessionDbo>> {
        return this._context.Sessions
            .select()
            .where("token", token)
            .where("isDeleted", false)
            .first()
        ;
    }

    public async renewToken(

    ): Promise<Nullable<SessionDbo>> {

    }

    private async findByIdInternal(
        id: Guid
    ): Promise<Nullable<SessionDbo>> {
        return this._context.Sessions
            .select()
            .where("id", id)
            .first()
        ;
    }

}
