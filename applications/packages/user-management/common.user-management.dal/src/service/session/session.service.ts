import { Guid, newGuid } from "@wraithlight/core.guid";
import { Nullable } from "@wraithlight/core.nullable";
import { addHours, addMinutes, utcNow } from "@wraithlight/core.date";

import { SessionDbo, UserManagementDbContextFactory } from "../../db-context";

import { REFRESH_VALID_FOR_HOURS, SESSION_VALID_FOR_MINUTES } from "./session.const";

export class SessionService {

    private readonly _context = UserManagementDbContextFactory
        .getInstance()
        .getDbContext()
    ;

    public async createSession(
        userId: Guid,
        applicationId: Guid,
        token: string,
        refreshToken: string,
    ): Promise<Nullable<SessionDbo>> {
        const id = newGuid();
        const now = utcNow();
        const sessionValidUntil = addMinutes(now, SESSION_VALID_FOR_MINUTES);
        const refreshValidHours = addHours(now, REFRESH_VALID_FOR_HOURS);
        await this._context.Sessions
            .insert({
                id: id,
                userId: userId,
                applicationId: applicationId,
                token: token,
                refreshToken: refreshToken,
                tokenValidFromUtc: now,
                tokenValidUntilUtc: sessionValidUntil,
                refreshTokenValidFromUtc: now,
                refreshTokenValidUntilUtc: refreshValidHours,
                createdAtUtc: now,
                createdByUserId: userId,
                isDeleted: false
            })
            .run()
        ;
        return this._context.Sessions
            .select()
            .where("id", id)
            .first()
        ;
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
        return this.findByTokenInternal(token);
    }

    public async renewToken(
        sessionToken: string
    ): Promise<Nullable<SessionDbo>> {
        const session = await this.findByTokenInternal(sessionToken);
        if (!session) {
            return undefined;
        }
        const now = utcNow();
        const sessionValidUntilUtc = addMinutes(now, SESSION_VALID_FOR_MINUTES);
        const refreshValidUntilUtc = addHours(now, REFRESH_VALID_FOR_HOURS);
        this._context.Sessions
            .update(
                "id",
                session.id,
                {
                    updatedAtUtc: now,
                    updatedByUserId: session.userId,
                    tokenValidUntilUtc: sessionValidUntilUtc,
                    refreshTokenValidUntilUtc: refreshValidUntilUtc
                }
            )
    }

    private async findByTokenInternal(
        token: Guid
    ): Promise<Nullable<SessionDbo>> {
        return this._context.Sessions
            .select()
            .where("token", token)
            .where("isDeleted", false)
            .first()
        ;
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
