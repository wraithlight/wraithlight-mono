import { NotifierService } from "@wraithlight/common.notifier-sdk.server";
import { PasswordService } from "@wraithlight/common.password";
import { Language } from "@wraithlight/core.content.types";
import { newGuid } from "@wraithlight/core.guid";
import { Nullable } from "@wraithlight/core.nullable";

import { SCOPE_NAME_MAP, UserStatus } from "../../_internal";
import {
    ScopeRepository,
    UserDbo,
    UserRepository,
    UserScopeDbo,
    UserScopeRepository
} from "../../repository";

import { ACCOUNT_ERRORS, DEFAULT_LOGIN_SCOPES } from "./account.const";
import { RegisterResult } from "./account.model";

export class AccountService {

    private readonly _userRepository = new UserRepository();
    private readonly _scopeRepository = new ScopeRepository();
    private readonly _notifierService = new NotifierService();
    private readonly _userScopeRepository = new UserScopeRepository();

    private readonly _passwordService = new PasswordService();

    public async create(
        username: string,
        emailAddress: string,
        password: string,
        passwordVerify: string
    ): Promise<RegisterResult> {
        if (password !== passwordVerify) {
            return {
                success: false,
                errors: [ACCOUNT_ERRORS.passwordMismatch]
            };
        }
        const userWithSameUsername = await this._userRepository
            .findUserByName(username);
        if (userWithSameUsername) {
            return {
                success: false,
                errors: [ACCOUNT_ERRORS.usernameAlreadyTaken]
            };
        }
        const userWithSameEmailAddress = await this._userRepository
            .findUserByEmailAddress(emailAddress);
        if (userWithSameEmailAddress) {
            return {
                success: false,
                errors: [ACCOUNT_ERRORS.emailAddressAlreadyUsed]
            };
        }
        const salt = this._passwordService.getSalt();
        const hashedPassword = this._passwordService
            .encryptPassword(password, salt)
        ;

        const model: UserDbo = {
            id: newGuid(),
            username: username,
            passwordHash: hashedPassword.encryptedPassword,
            languageId: Language.English,
            failedLoginAttempts: 0,
            status: UserStatus.EmailVerify,
            emailAddress: emailAddress,
            isDeleted: false
        };
        await this._userRepository.add(model);

        await this.addScopes(model);
        await this._notifierService.sendEmail(
            emailAddress,
            "TODO SUBJECT",
            "TODO CONTENT",
            true
        );

        return {
            success: true
        };
    }

    public async findByUsername(username: string): Promise<Nullable<UserDbo>> {
        return this._userRepository.findUserByName(username);
    }

    private async addScopes(user: UserDbo): Promise<void> {
        const promises = DEFAULT_LOGIN_SCOPES.map(async m => {
            const scopeId = SCOPE_NAME_MAP[m];
            const scope = await this._scopeRepository.findById(scopeId);
            if (!scope) {
                return;
            }
            const userScope: UserScopeDbo = {
                userId: user.id,
                scopeId: scope.id
            };
            await this._userScopeRepository.add(userScope);
        });
        await Promise.allSettled(promises);
    }

}
