import { Guid } from "@wraithlight/core.types";

import { UserBaseModel } from "./user-base.model";

export interface UserModel extends UserBaseModel {
    id: Guid;
}
