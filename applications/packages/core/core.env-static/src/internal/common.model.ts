import { ApiModel } from "./_shared/common-api.model";
import { CommonContentModel } from "./content/common-content.model";
import { CommonEditorModel } from "./editor/editor.model";
import { GameWebsiteModel } from "./game-website/game-website.model";
import { CommonLoggerModel } from "./logger/common.logger.model";
import { CommonUserManagementModel } from "./user-management/common-user-management.model";
import { CommonWebsiteModel } from "./website/common-website.model";

export interface CommonModel {
    isProduction: boolean;
    auth: {
        address: ApiModel;
    }
    gameWebsite: GameWebsiteModel;
    editor: CommonEditorModel;
    content: CommonContentModel;
    website: CommonWebsiteModel;
    userManagement: CommonUserManagementModel;
    logger: CommonLoggerModel;
}
