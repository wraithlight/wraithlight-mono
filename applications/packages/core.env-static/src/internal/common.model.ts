import { ApiModel } from "./_shared/common-api.model";
import { GameWebsiteModel } from "./game-website/game-website.model";

export interface CommonModel {
    isProduction: boolean;
    auth: {
        address: ApiModel;
    }
    gameWebsite: GameWebsiteModel;
}
