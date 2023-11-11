import { IP_API_BASE_URL, IP_API_PARAMS, IP_API_PATH } from "./ip-api.const";

export class IpApiClientConfig {

    public getUrlForIp(ip: string): string {
        const baseUrl = IP_API_BASE_URL;
        const path = IP_API_PATH;
        const params = this.createIpApiParams();
        return `${baseUrl}${path}/${ip}?${params}`;
    }

    private createIpApiParams(): string {
        return Object.entries(IP_API_PARAMS).map(m => m.join("=")).join("&");
    }

}
