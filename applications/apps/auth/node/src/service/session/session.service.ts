import { LoginScope } from "@wraithlight/core.auth.types";
import { SHA256 } from "@wraithlight/core.crypto";
import { dateNow } from "@wraithlight/core.date";
import { addMinutes } from "@wraithlight/core.date";
import { Nullable } from "@wraithlight/core.nullable";

import { SESSION_TIME_MINUTES } from "./session.const";
import {
    CheckResult,
    KeepAliveResult,
    SessionModel
} from "./session.model";

export class SessionService {

    private static _instance: Nullable<SessionService>;

    private readonly _sessions: Array<SessionModel> = [];

    private constructor() { }

    public static getInstance(): SessionService {
        if (!this._instance) {
            this._instance = new SessionService();
        }
        return this._instance;
    }

    public startSession(
        username: string,
        scope: LoginScope
    ): SessionModel {
        const now = dateNow();

        const tokenStr = `${username}${scope}`;
        const token = SHA256(tokenStr);

        const session = {
            token: token,
            scope: scope,
            startAt: now,
            validUntil: addMinutes(now, SESSION_TIME_MINUTES)
        };
        this._sessions.push(session);
        return session;
    }

    public stopSession(
        token: string,
        scope: LoginScope
    ): boolean {
        const isValid = this.hasValidSession(token, scope);
        if (!isValid) {
            return false;
        }

        const session = this.getSession(token);
        const index = this._sessions.indexOf(session);
        this._sessions.splice(index, 1);
        return true;
    }

    public renew(
        token: string,
        scope: LoginScope
    ): KeepAliveResult {
        const isValid = this.hasValidSession(token, scope);
        if (!isValid) {
            return {
                success: false
            }
        }

        const now = dateNow();
        const session = this.getSession(token);
        session.validUntil = addMinutes(now, SESSION_TIME_MINUTES);
        return {
            success: true,
            session: session
        };
    }

    public checkSession(
        token: string,
        scope: LoginScope
    ): CheckResult {
        const isValid = this.hasValidSession(token, scope);

        if (!isValid) {
            return {
                isValid: false
            };
        }

        const session = this.getSession(token);
        return {
            isValid: true,
            session: session
        };
    }

    private hasValidSession(
        token: string,
        scope: LoginScope
    ): boolean {
        if (!this.hasSession(token)) {
            return false;
        }
        const session = this.getSession(token);

        if (session.scope !== scope) {
            return false;
        }

        const now = dateNow();
        return session.validUntil < now;
    }

    private getSession(token: string): SessionModel {
        return this._sessions.find(m => m.token === token)!;
    }

    private hasSession(token: string): boolean {
        return this._sessions.findIndex(m => m.token === token) > -1;
    }

}
