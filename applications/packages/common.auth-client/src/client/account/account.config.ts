import { ACCOUNT_API_ENDPOINTS } from "@wraithlight/core.auth-common";
import { COMMON_STATIC } from "@wraithlight/core.env-static";

export class AccountClientConfig {

    public getAccountRegisterUrl(): string {
        return `${this.getAccountRootUrl()}${ACCOUNT_API_ENDPOINTS.external.register}`;
    }

    private getAccountRootUrl(): string {
        return `${this.getAccountBaseUrl()}${ACCOUNT_API_ENDPOINTS.external.root}`;
    }

    private getAccountBaseUrl(): string {
        return `${COMMON_STATIC.auth.address.host}:${COMMON_STATIC.auth.address.port}`;
    }

}
