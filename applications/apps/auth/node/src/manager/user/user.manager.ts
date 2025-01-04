import {
  UserService
} from "@wraithlight/common.user-management.dal";
import { ConflictError } from "@wraithlight/core.errors";

export class UserManager {

  private readonly _userService = new UserService();

  public async checkUsername(username: string): Promise<void> {
    const result = await this._userService.findUserByUsername(username);
    if (result.isSuccessTC()) {
      throw new ConflictError();
    }
  }

  public async checkEmailAddress(emailAddress: string): Promise<void> {
    const result = await this._userService.findUserByEmail(emailAddress);
    if (result.isSuccessTC()) {
      throw new ConflictError();
    }
  }

}
