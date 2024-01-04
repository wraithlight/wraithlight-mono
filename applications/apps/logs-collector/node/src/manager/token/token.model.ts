import { Guid } from "@wraithlight/core.guid";

import { TokenType } from "../../_internal";

export interface IToken {
    id: number;
    applicationId: number;
    applicationName: string;
    tokenId: string;
    tokenSecret: string;
    tokenType: TokenType;
    isActive: boolean;
    createdAt: Date;
    createdBy: Guid;
    createdByName: string;
}
