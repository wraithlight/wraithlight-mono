import { SHA256 } from "@wraithlight/core.crypto";

export class HealthCheckTokenV1Service {

    constructor(
        private readonly _token: string
    ) { }

    public isTokenValid(token: string): boolean {
        return SHA256(token) === this._token;
    }

}
