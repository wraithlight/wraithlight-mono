import { Nullable, isNil } from "@wraithlight/core.nullable";

import { ApplicationService } from "../../service";

import { ApplicationMapper } from "./application.mapper";
import {
    ApplicationDetails,
    CreateApplicationModel,
    UpdateApplicationModel
} from "./application.model";

export class ApplicationManager {

    private readonly _applicationService = new ApplicationService();

    public async create(
        model: CreateApplicationModel
    ): Promise<boolean> {
        return this._applicationService.create({
            application: model.name,
            description: model.description
        });
    }

    public async delete(
        id: number
    ): Promise<boolean> {
        return this._applicationService.delete(id);
    }

    public async update(
        id: number,
        model: UpdateApplicationModel
    ): Promise<boolean> {
        return this._applicationService.update(id, {
            application: model.name,
            description: model.description
        });
    }

    public async changeActiveStatus(
        id: number,
        newValue: boolean
    ): Promise<boolean> {
        return this._applicationService.update(id, {
            isActive: newValue
        });
    }

    public async list(): Promise<ReadonlyArray<ApplicationDetails>> {
        return this._applicationService
            .listAll()
            .then(m => ApplicationMapper.mapListToModel(m));
    }

    public async details(
        id: number
    ): Promise<Nullable<ApplicationDetails>> {
        return this._applicationService
            .findById(id)
            .then(m => {
                if (isNil(m)) {
                    return undefined;
                }
                return ApplicationMapper.mapItemToModel(m);
            })
        ;
    }

}
