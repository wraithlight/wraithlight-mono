import { Guid } from "@wraithlight/core.guid";

import { TokenType } from "../../_internal";

export interface TokenDbo {
    id: number;
    applicationId: number;
    tokenId: string;
    tokenSecret: string;
    tokenType: TokenType;
    isActive: boolean;
    createdAt: Date;
    createdBy: Guid;
}
