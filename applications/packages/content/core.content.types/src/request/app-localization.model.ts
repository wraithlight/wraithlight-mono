import { Guid } from "@wraithlight/core.guid";

import { Language } from "../enum";

export interface ContentAppLocalizationRequestModel {
    languageId: Language;
    applicationId: Guid;
}
