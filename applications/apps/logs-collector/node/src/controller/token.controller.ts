import { Authorize } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";
import { BaseController, HttpController, HttpDelete, HttpPost } from "@wraithlight/core/core.node";
import { LOGS_COLLECTOR_API_ENDPOINTS } from "@wraithlight/core.logs-collector.constants";
import { isNil } from "@wraithlight/core.nullable";

import { TokenManager } from "../manager";

import {
    ApplicationIdValidator,
    TokenIdValidator
} from "./validators";

@HttpController(LOGS_COLLECTOR_API_ENDPOINTS.v1.token.root)
export class TokenController extends BaseController {

    private readonly _tokenIdValidator = new TokenIdValidator();
    private readonly _applicationIdValidator = new ApplicationIdValidator();
    private readonly _tokenManager = new TokenManager();

    @Authorize(LoginScope.LogsCollector)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.token.create)
    public async create(): Promise<void> {

    }

    @Authorize(LoginScope.LogsCollector)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.token.list)
    public async list(): Promise<void> {
        const tokens = await this._tokenManager.list();
        return this.ok(tokens);
    }

    @Authorize(LoginScope.LogsCollector)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.token.update.forServer)
    public async update(id: number): Promise<void> {
        const isValid = this._tokenIdValidator.validate({ id: id });
        if (!isValid) {
            return this.badRequest();
        }
    }

    @Authorize(LoginScope.LogsCollector)
    @HttpDelete(LOGS_COLLECTOR_API_ENDPOINTS.v1.token.delete.forServer)
    public async delete(id: number): Promise<void> {
        const isValid = this._tokenIdValidator.validate({ id: id });
        if (!isValid) {
            return this.badRequest();
        }
    }

    @Authorize(LoginScope.LogsCollector)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.token.id.forServer)
    public async details(id: number): Promise<void> {
        const isValid = this._tokenIdValidator.validate({ id: id });
        if (!isValid) {
            return this.badRequest();
        }
        const token = await this._tokenManager.findDetailsById(id);
        if (isNil(token)) {
            return this.notFound();
        }
        return this.ok(token);
    }

    @Authorize(LoginScope.LogsCollector)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.token.listForApplication.forServer)
    public async listByApplication(applicationId: number): Promise<void> {
        const isValid = this._applicationIdValidator.validate({ applicationId: applicationId });
        if (!isValid) {
            return this.badRequest();
        }
        const tokens = await this._tokenManager.listByApplicationId(applicationId);
        return this.ok(tokens);
    }

}
