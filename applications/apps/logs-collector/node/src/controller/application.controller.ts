import { Authorize } from "@wraithlight/common.auth-sdk.server";
import { LoginScope } from "@wraithlight/core.auth.types";
import {
    LOGS_COLLECTOR_API_ENDPOINTS
} from "@wraithlight/core.logs-collector.constants";
import {
    CreateApplicationModel,
    EditApplicationModel
} from "@wraithlight/core.logs-collector.types";
import {
    BaseController,
    HttpController,
    HttpDelete,
    HttpGet,
    HttpPost
} from "@wraithlight/core.node";
import { isNil } from "@wraithlight/core.nullable";

import { ApplicationManager } from "../manager";

import { ApplicationMapper } from "./mapper";
import { ApplicationIdValidator } from "./validators";

@HttpController(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.root)
export class ApplicationController extends BaseController {

    private readonly _applicationIdValidator = new ApplicationIdValidator();
    private readonly _applicationManager = new ApplicationManager();

    @Authorize(LoginScope.LogsCollector)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.create)
    public async create(
        model: CreateApplicationModel
    ): Promise<void> {
        const result = await this._applicationManager.create({
            name: model.application,
            description: model.description
        });
        if (!result) {
            return this.conflict();
        }
        return this.created();
    }

    @Authorize(LoginScope.LogsCollector)
    @HttpDelete(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.delete.forServer)
    public async delete(id: number): Promise<void> {
        if (!this._applicationIdValidator.validate({ applicationId: id })) {
            return this.badRequest();
        }
        const result = await this._applicationManager.delete(id);
        if (!result) {
            return this.notFound();
        }
        return this.noContent();
    }

    @Authorize(LoginScope.LogsCollector)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.update.forServer)
    public async update(
        id: number,
        model: EditApplicationModel
    ): Promise<void> {
        if (!this._applicationIdValidator.validate({ applicationId: id })) {
            return this.badRequest();
        }
        const result = await this._applicationManager.update(id, {
            name: model.application,
            description: model.description
        });
        if (!result) {
            this.notFound();
        }
        return this.ok();
    }

    @Authorize(LoginScope.LogsCollector)
    @HttpGet(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.list)
    public async list(): Promise<void> {
        const items = await this._applicationManager.list();
        const list = ApplicationMapper.toDtoDetailsList(items);
        return this.ok(list);
    }

    @Authorize(LoginScope.LogsCollector)
    @HttpGet(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.id.forServer)
    public async details(id: number): Promise<void> {
        if (!this._applicationIdValidator.validate({ applicationId: id })) {
            return this.badRequest();
        }
        const details = await this._applicationManager.details(id);
        if (isNil(details)) {
            return this.notFound();
        }
        const model = ApplicationMapper.toDtoDetailsItem(details);
        return this.ok(model);
    }

    @Authorize(LoginScope.LogsCollector)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.deactivate.forServer)
    public async deactivate(id: number): Promise<void> {
        if (!this._applicationIdValidator.validate({ applicationId: id })) {
            return this.badRequest();
        }
        const result = this._applicationManager.changeActiveStatus(id, false);
        if (!result) {
            return this.notFound();
        }
        return this.ok();
    }

    @Authorize(LoginScope.LogsCollector)
    @HttpPost(LOGS_COLLECTOR_API_ENDPOINTS.v1.application.activate.forServer)
    public async activate(id: number): Promise<void> {
        if (!this._applicationIdValidator.validate({ applicationId: id })) {
            return this.badRequest();
        }
        const result = this._applicationManager.changeActiveStatus(id, true);
        if (!result) {
            return this.notFound();
        }
        return this.ok();
    }

}
