import {
    ServerUserManagementConfigReader
} from "@wraithlight/common.environment-static.server";
import { LoginScope } from "@wraithlight/core.auth.types";
import { addMinutes, dateNow, utcNow } from "@wraithlight/core.date";
import { CoreEnvironment } from "@wraithlight/core.env.sdk";
import { Guid, newGuid } from "@wraithlight/core.guid";
import { CoreJWT } from "@wraithlight/core.jwt";
import { Nullable, isNil } from "@wraithlight/core.nullable";

import { SCOPE_NAME_MAP } from "../../_internal";
import { SessionDbo, SessionRepository } from "../../repository";

import { SESSION_TIME_MINUTES } from "./session.const";
import {
    CheckResult,
    KeepAliveResult,
    SessionModel,
    SessionTokenPayload
} from "./session.model";

export class SessionService {

    private readonly _serverCfg = ServerUserManagementConfigReader
        .getInstance(CoreEnvironment.getEnvironmentType());
    private readonly _repository = new SessionRepository();
    private static _instance: Nullable<SessionService>;

    private constructor() { }

    public static getInstance(): SessionService {
        if (!this._instance) {
            this._instance = new SessionService();
        }
        return this._instance;
    }

    public async startSession(
        userId: Guid,
        scope: LoginScope
    ): Promise<SessionModel> {
        const validUntil = addMinutes(
            utcNow(),
            SESSION_TIME_MINUTES
        );

        const payload: SessionTokenPayload = {
            userId: userId,
            validUntil: validUntil,
            scope: scope
        };

        const token = CoreJWT.encrypt(
            payload,
            this._serverCfg.get(m => m.session.iv),
            this._serverCfg.get(m => m.session.key),
            this._serverCfg.get(m => m.session.secret),
            SESSION_TIME_MINUTES
        );

        const scopeId = SCOPE_NAME_MAP[scope];

        const session: SessionDbo = {
            id: newGuid(),
            token: token,
            userId: userId,
            scopeId: scopeId,
            validUntil: validUntil
        };
        await this._repository.create(session);
        return {
            token: session.token,
            scope: scope,
            validUntil: session.validUntil
        };
    }

    public async stopSession(
        token: string
    ): Promise<boolean> {
        const tokenPayload = CoreJWT.decrypt<SessionTokenPayload>(
            token,
            this._serverCfg.get(m => m.session.iv),
            this._serverCfg.get(m => m.session.key),
        );

        if (!tokenPayload.success || isNil(tokenPayload.payload)) {
            return false;
        }

        const scopeId = SCOPE_NAME_MAP[tokenPayload.payload.scope];

        const session = await this.getSession(
            tokenPayload.payload.userId,
            scopeId
        );

        if (isNil(session)) {
            return false;
        }

        await this._repository.remove(session.id);

        return true;
    }

    public async renew(
        token: string
    ): Promise<Nullable<KeepAliveResult>> {
        const tokenPayload = CoreJWT.decrypt<SessionTokenPayload>(
            token,
            this._serverCfg.get(m => m.session.iv),
            this._serverCfg.get(m => m.session.key),
        );

        if (!tokenPayload.success || isNil(tokenPayload.payload)) {
            return {
                success: false
            };
        }

        const scopeId = SCOPE_NAME_MAP[tokenPayload.payload.scope];

        const now = utcNow();
        const session = await this.getSession(
            tokenPayload.payload.userId,
            scopeId
        );

        if (isNil(session)) {
            // TODO: Add OperationResult.error here
            return {
                success: false
            };
        }

        session.validUntil = addMinutes(
            now,
            SESSION_TIME_MINUTES
        );
        tokenPayload.payload.validUntil = addMinutes(
            tokenPayload.payload.validUntil,
            SESSION_TIME_MINUTES
        );

        const newToken = CoreJWT.encrypt(
            tokenPayload.payload,
            this._serverCfg.get(m => m.session.iv),
            this._serverCfg.get(m => m.session.key),
            this._serverCfg.get(m => m.session.secret),
            SESSION_TIME_MINUTES
        );

        await this._repository.updateValidUntilAndToken(
            session.id,
            newToken,
            session.validUntil
        );
        return {
            success: true,
            session: {
                token: newToken,
                scope: tokenPayload.payload.scope,
                validUntil: session.validUntil
            }
        };
    }

    public async checkSession(
        token: string
    ): Promise<CheckResult> {
        const tokenPayload = CoreJWT.decrypt<SessionTokenPayload>(
            token,
            this._serverCfg.get(m => m.session.iv),
            this._serverCfg.get(m => m.session.key),
        );

        if (!tokenPayload.success || isNil(tokenPayload.payload)) {
            return {
                isValid: false
            };
        }
        const scopeId = SCOPE_NAME_MAP[tokenPayload.payload.scope];
        const session = await this.getSession(
            tokenPayload.payload.userId,
            scopeId
        );

        if (isNil(session)) {
            return {
                isValid: false
            };
        }

        return {
            isValid: true,
            session: {
                token: session.token,
                scope: tokenPayload.payload.scope,
                validUntil: session.validUntil
            }
        };
    }

    private async getSession(
        userId: Guid,
        scopeId: Guid
    ): Promise<Nullable<SessionDbo>> {
        return this._repository.findByUserAndScope(
            userId,
            scopeId
        )
        .then(m => m.filter(o => o.validUntil > dateNow()))
        .then(m => m.length > 0 ? m[0] : undefined);
    }

}
