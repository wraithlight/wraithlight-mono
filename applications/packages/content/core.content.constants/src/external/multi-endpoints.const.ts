import { Guid } from "@wraithlight/core.guid";

export const EXTERNAL_MULTI_ENDPOINTS = Object.freeze({
    api: {
        v1: {
            content: {
                multi: {
                    forServer: "/api/v1/content/multi",
                    byKey: {
                        forClient: (languageId: Guid, applicationId: Guid) => `/api/v1/content/multi/by-app/${languageId}/${applicationId}`,
                        forServer: "by-app/:languageId/:key"
                    }
                }
            }
        }
    }
});
