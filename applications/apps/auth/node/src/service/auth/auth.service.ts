import { LoginScope } from "@wraithlight/core.auth-common";

import {
    ScopeRepository,
    UserRepository,
    UserScopeRepository
} from "../../repository";
import { SCOPE_NAME_MAP, UserStatus } from "../../_internal";
import { PasswordService } from "../_internal";

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
        const saltedPassword = this._passwordService.saltPassword(password, user.passwordSalt);
        const hashedPassword = this._passwordService.hashPassword(saltedPassword);
        const isPasswordMatch = this._passwordService.verifyPassword(hashedPassword, user.passwordHash);
        if (!isPasswordMatch) {
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
        const userScope = await this._userScopeRepository.find(user.id, scope.id);
        if (!userScope) {
            return {
                success: false,
                errors: [AUTH_ERRORS.userScopeNotFound]
            };
        }
        
        if (user.status === UserStatus.Active) {
            return {
                success: false,
                errors: [AUTH_ERRORS.needsEmailVerify]
            };
        }

        return {
            success: true
        };

    }

}
