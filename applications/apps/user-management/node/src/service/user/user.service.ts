import { UserEditModel, UserModel, UserStatus } from "@wraithlight/core.user-management.types";
import { applicationNameById } from "@wraithlight/core.common-utils";
import { LoggerService } from "@wraithlight/common.logger-sdk";
import { Nullable, isNil } from "@wraithlight/core/core.types";

import { UserDbo, UserRepository, UserScopeDbo, UserScopeRepository } from "../../repository";

export class UserService {

    private readonly _userRepository = new UserRepository();
    private readonly _userScopeRepository = new UserScopeRepository();
    private readonly _loggerService = LoggerService.getInstance();

    public async listAll(): Promise<Array<UserModel>> {
        const users = await this._userRepository.listAll();
        const promises = users.map(this.userMapper);
        return await Promise.all(promises);
    }

    public async findById(id: string): Promise<Nullable<UserModel>> {
        const user = await this._userRepository.findUserById(id);
        if (!user) {
            this._loggerService.warn(`UserService::findById User with id '${id}' was not found!`);
            return undefined;
        }
        return await this.userMapper(user);
    }

    public async findByApplication(id: string): Promise<Array<UserModel>> {
        const userScopes = await this._userScopeRepository.findByScopeId(id);
        const usersPromises = userScopes.map(async m => {
            const user = await this._userRepository.findUserById(m.userId);
            if (!user) {
                this._loggerService.warn(`UserService::findByApplication User with id '${m.userId}' was not found!`);
                return;
            }
            return this.userMapper(user);
        });
        const users = await Promise.all(usersPromises);
        return users.filter(this.isUserModel);
    }

    public async update(id: string, model: UserEditModel): Promise<void> {
        const scopes: Array<UserScopeDbo> = model.applications.map(m => ({
            scopeId: m.id,
            userId: id
        }));
        const dbo: Partial<UserDbo> = {
            status: model.status,
            failedLoginAttempts: model.failedLoginAttempts,
            isDeleted: model.isDeleted,
            emailAddress: model.emailAddress,
        };
        await this._userRepository.update(id, dbo);
        await this._userScopeRepository.deleteByUserId(id);
        for (const scope of scopes) {
            await this._userScopeRepository.add(scope);
        }
    }

    private isUserModel(model: Nullable<UserModel>): model is UserModel {
        return isNil<UserModel>(model);
    }

    private async userMapper(userDbo: UserDbo): Promise<UserModel> {
        const applications = await this._userScopeRepository.findByUserId(userDbo.id);
        return {
            username: userDbo.username,
            emailAddress: userDbo.emailAddress,
            id: userDbo.id,
            isDeleted: userDbo.isDeleted,
            failedLoginAttempts: userDbo.failedLoginAttempts,
            applications: applications.map(m => ({
                displayName: applicationNameById(m.scopeId),
                id: m.scopeId
            })),
            status: UserStatus.Active
        }
    }

}
