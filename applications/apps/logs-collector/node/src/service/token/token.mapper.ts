import { TokenDbo } from "../../repository";

import { TokenModel } from "./token.model";

export class TokenMapper {

    public static mapListToModel(
        items: ReadonlyArray<TokenDbo>
    ): ReadonlyArray<TokenModel> {
        return items.map(m => this.mapItemToModel(m));
    }

    public static mapItemToModel(item: TokenDbo): TokenModel {
        return {
            id: item.id,
            applicationId: item.applicationId,
            tokenId: item.tokenId,
            tokenSecret: item.tokenSecret,
            tokenType: item.tokenType,
            isActive: item.isActive,
            createdAt: item.createdAt,
            createdBy: item.createdBy
        };
    }

}
