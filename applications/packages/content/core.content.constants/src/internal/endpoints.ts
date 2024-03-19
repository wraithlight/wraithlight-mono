import { Guid } from "@wraithlight/core.guid";

export const INTERNAL_ENDPOINTS = Object.freeze({
    api: {
        v1: {
            keys: {
                forServer: `/api/v1/keys`,
                list: {
                    forServer: `/list`,
                    forClient: `/api/v1/keys/list`
                },
                details: {
                    forServer: `/:id`,
                    forClient: (id: Guid) => `/api/v1/keys/${id}`
                },
                create: {
                    forServer: `/create`,
                    forClient: `/api/v1/keys/create`
                },
                update: {
                    forServer: `/:id/update`,
                    forClient: (id: Guid) => `/api/v1/keys/${id}/update`
                },
                delete: {
                    forServer: `/:id/delete`,
                    forClient: (id: Guid) => `/api/v1/keys/${id}/delete`
                }
            },
            languages: {
                forServer: `/api/v1/languages`,
                list: {
                    forServer: `/list`,
                    forClient: `/api/v1/languages/list`
                },
                details: {
                    forServer: `/:id`,
                    forClient: (id: Guid) => `/api/v1/languages/${id}`
                },
                create: {
                    forServer: `/create`,
                    forClient: `/api/v1/languages/create`
                },
                update: {
                    forServer: `/:id/update`,
                    forClient: (id: Guid) => `/api/v1/languages/${id}/update`
                },
                delete: {
                    forServer: `/:id/delete`,
                    forClient: (id: Guid) => `/api/v1/languages/${id}/delete`
                }
            },
            applications: {
                forServer: `/api/v1/applications`,
                list: {
                    forServer: `/list`,
                    forClient: `/api/v1/applications/list`
                },
                details: {
                    forServer: `/:id`,
                    forClient: (id: Guid) => `/api/v1/applications/${id}`
                },
                create: {
                    forServer: `/create`,
                    forClient: `/api/v1/applications/create`
                },
                update: {
                    forServer: `/:id/update`,
                    forClient: (id: Guid) => `/api/v1/applications/${id}/update`
                },
                delete: {
                    forServer: `/:id/delete`,
                    forClient: (id: Guid) => `/api/v1/applications/${id}/delete`
                }
            }
        }
    }
});
