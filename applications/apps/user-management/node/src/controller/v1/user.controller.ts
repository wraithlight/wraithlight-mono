import { BaseController, HttpController, HttpGet, HttpPost } from "@wraithlight/core/core.node";
import { API_ENDPOINTS } from "@wraithlight/core.user-management.constant";
import { UserEditModel } from "@wraithlight/core.user-management.types";
import { Authorize } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";

import { UserService } from "../../service";

@HttpController(API_ENDPOINTS.v1.user.root)
export class UserController extends BaseController {

    private readonly _userService = new UserService();

    @Authorize(LoginScope.UserManagement)
    @HttpGet(API_ENDPOINTS.v1.user.all)
    public async list(): Promise<void> {
        const users = await this._userService.listAll();
        return this.ok(users);
    }

    @Authorize(LoginScope.UserManagement)
    @HttpGet(API_ENDPOINTS.v1.user.byApplication.server)
    public async listByApplication(applicationId: string): Promise<void> {
        const users = await this._userService.findByApplication(applicationId);
        return this.ok(users);
    }

    @Authorize(LoginScope.UserManagement)
    @HttpGet(API_ENDPOINTS.v1.user.id.server)
    public async findById(userId: string): Promise<void> {
        const user = await this._userService.findById(userId);
        if (!user) {
            return this.notFound();
        }
        return this.ok(user);
    }

    @Authorize(LoginScope.UserManagement)
    @HttpPost(API_ENDPOINTS.v1.user.edit.server)
    public async edit(userId: string, userDto: UserEditModel): Promise<void> {
        await this._userService.update(userId, userDto);
        return this.ok();
    }

    @Authorize(LoginScope.UserManagement)
    @HttpPost(API_ENDPOINTS.v1.user.resetPassword)
    public async resetPassword(userId: string): Promise<void> {
        // TODO: Implementation.
        // This might be done once UserManagement is merged with Auth.
    }

}
