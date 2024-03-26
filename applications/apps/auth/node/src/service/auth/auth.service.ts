import { PasswordService } from "@wraithlight/common.password";
import { LoginScope, UserStatus } from "@wraithlight/core.auth.types";

import { SCOPE_NAME_MAP } from "../../_internal";
import {
    ScopeRepository,
    UserRepository,
    UserScopeRepository
} from "../../repository";

import { AUTH_ERRORS, MAXIMUM_FAILED_LOGIN_ATTEMPTS } from "./auth.const";
import { AuthResult } from "./auth.model";

export class AuthService {

    private readonly _userRepository = new UserRepository();
    private readonly _scopeRepository = new ScopeRepository();
    private readonly _userScopeRepository = new UserScopeRepository();

    private readonly _passwordService = new PasswordService();

    public async login(
        username: string,
        password: string,
        scopeName: LoginScope
    ): Promise<AuthResult> {
        const user = await this._userRepository.findUserByName(username);
        if (!user) {
            return {
                success: false,
                errors: [AUTH_ERRORS.userNotFound]
            };
        }
        if (user.failedLoginAttempts === MAXIMUM_FAILED_LOGIN_ATTEMPTS) {
            return {
                success: false,
                errors: [AUTH_ERRORS.userBlockDueTooManyInvalidAttempts]
            };
        }

        if (user.status === UserStatus.EmailVerify) {
            return {
                success: false,
                errors: [AUTH_ERRORS.needsEmailVerify]
            };
        }

        const isPasswordMatch = this._passwordService.verifyPassword(
            password,
            user.passwordHash
        );
        if (!isPasswordMatch) {
            user.failedLoginAttempts += 1;
            await this._userRepository.update(
                user.id,
                {
                    failedLoginAttempts: user.failedLoginAttempts
                }
            );

            if (user.failedLoginAttempts === MAXIMUM_FAILED_LOGIN_ATTEMPTS) {
                await this._userRepository.update(
                    user.id,
                    {
                        status: UserStatus.LockedOutDueTooManyInvalidLogin
                    }
                );
            }

            return {
                success: false,
                errors: [AUTH_ERRORS.invalidPassword]
            };
        }
        const scopeId = SCOPE_NAME_MAP[scopeName];
        const scope = await this._scopeRepository.findById(scopeId);
        if (!scope) {
            return {
                success: false,
                errors: [AUTH_ERRORS.scopeNotFound]
            };
        }
        const userScope = await this._userScopeRepository.find(
            user.id,
            scope.id
        );
        if (!userScope) {
            return {
                success: false,
                errors: [AUTH_ERRORS.userScopeNotFound]
            };
        }

        await this._userRepository.update(
            user.id,
            { failedLoginAttempts: 0 }
        );

        return {
            success: true
        };

    }

}
