import { Guid } from "@wraithlight/core.guid";

export const EXTERNAL_SINGLE_ENDPOINTS = Object.freeze({
    api: {
        v1: {
            content: {
                single: {
                    forServer: "/api/v1/content/single",
                    byKey: {
                        forClient: (languageId: Guid, key: string) => `/api/v1/content/single/by-key/${languageId}/${key}`,
                        forServer: "by-key/:languageId/:key"
                    }
                }
            }
        }
    }
});
