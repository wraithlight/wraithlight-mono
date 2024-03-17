import { Language } from "../enum";

export interface ContentSingleKeyResponseModel {
    key: string;
    language: Language;
    content: string;
}
