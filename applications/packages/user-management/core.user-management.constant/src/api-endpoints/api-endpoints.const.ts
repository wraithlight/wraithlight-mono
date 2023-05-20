const API_V1_BASE = "/api/v1";
const USER_V1 = `${API_V1_BASE}/user`

export const API_ENDPOINTS = Object.freeze({
    v1: {
        user: {
            root: USER_V1,
            all: `${USER_V1}/all`,
            byApplication: {
                server: `${USER_V1}/application`,
                client: (applicationId: string) => `${USER_V1}/application?id=${applicationId}`
            },
            id: {
                server: `${USER_V1}/findById`,
                client: (id: string) => `${USER_V1}/findById?id=${id}`
            },
            edit: {
                server: `${USER_V1}/edit`,
                client: (id: string) => `${USER_V1}/edit?id=${id}`
            },
            resetPassword: `${USER_V1}/reset-password`
        }
    }
});
