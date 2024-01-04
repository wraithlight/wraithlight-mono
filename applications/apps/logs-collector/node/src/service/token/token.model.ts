import { Guid } from "@wraithlight/core/core.guid";

import { TokenType } from "../../_internal";

export interface TokenModel {
    id: number;
    applicationId: number;
    tokenId: string;
    tokenSecret: string;
    tokenType: TokenType;
    isActive: boolean;
    createdAt: Date;
    createdBy: Guid;
}
