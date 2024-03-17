import { Guid } from "@wraithlight/core.guid";

import { Language } from "../enum";

export interface ContentAppLocalizationResponseModel {
    languageId: Language;
    applicationId: Guid;
    payload: ContentAppLocalizationPayloadResponseModel;
}

export interface ContentAppLocalizationPayloadResponseModel {
    [key: string]: string;
}
