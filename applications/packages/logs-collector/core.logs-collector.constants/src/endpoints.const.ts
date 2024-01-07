const API_BASE_URL = "/api";
const V1_API_BASE_URL = `${API_BASE_URL}/v1`;
const LOG_V1_API_BASE_URL = `${V1_API_BASE_URL}/log`
const APPLICATION_V1_API_BASE_URL = `${V1_API_BASE_URL}/application`
const TOKEN_V1_API_BASE_URL = `${V1_API_BASE_URL}/token`

export const LOGS_COLLECTOR_API_ENDPOINTS = Object.freeze({
    v1: {
        log: {
            root: LOG_V1_API_BASE_URL,
            put: `/put`,
            list: `/list`
        },
        application: {
            root: APPLICATION_V1_API_BASE_URL,
            list: `/list`,
            id: {
                forServer: `/:id`,
                forClient: (id: string) => `/${id}`
            },
            create: `/create`,
            update: {
                forServer: `update/:id`,
                forClient: (id: string) => `update/${id}`
            },
            delete: {
                forServer: `delete/:id`,
                forClient: (id: string) => `delete/${id}`
            },
            deactivate: {
                forServer: `deactivate/:id`,
                forClient: (id: string) => `deactivate/${id}`
            },
            activate: {
                forServer: `activate/:id`,
                forClient: (id: string) => `activate/${id}`
            }
        },
        token: {
            root: TOKEN_V1_API_BASE_URL,
            list: `/list`,
            listForApplication: {
                forServer: `/:applicationId`,
                forClient: (applicationId: string) => `/${applicationId}`
            },
            id: {
                forServer: `/:id`,
                forClient: (id: string) => `/${id}`
            },
            create: `/create`,
            update: {
                forServer: `update/:id`,
                forClient: (id: string) => `update/${id}`
            },
            delete: {
                forServer: `delete/:id`,
                forClient: (id: string) => `delete/${id}`
            }
        }
    }
});
