import { utcNow } from "@wraithlight/core.date";
import { Nullable, isNil } from "@wraithlight/core.nullable";

import { ApplicationDbo, ApplicationRepository } from "../../repository";

import { DEFAULT_ACTIVE } from "./application.const";
import { ApplicationMapper } from "./application.mapper";
import {
    ApplicationCreateModel,
    ApplicationModel,
    ApplicationNameWithId,
    ApplicationUpdateModel
} from "./application.model";


export class ApplicationService {

    private readonly _applicationRepository = new ApplicationRepository();

    public async findApplicationNameById(
        id: number
    ): Promise<Nullable<string>> {
        return this._applicationRepository.findName(id);
    }

    public async findAllApplicationNames(
    ): Promise<ReadonlyArray<ApplicationNameWithId>> {
        return this._applicationRepository
            .listAll()
            .then(m => m.map(o => ({
                name: o.application,
                id: o.id
            })))
        ;
    }

    public async delete(id: number): Promise<boolean> {
        return this._applicationRepository.delete(id);
    }

    public async create(
        entry: ApplicationCreateModel
    ): Promise<boolean> {
        return this._applicationRepository.create({
            id: 0,
            application: entry.application,
            description: entry.description,
            isActive: DEFAULT_ACTIVE,
            createdAt: utcNow(),
            createdBy: "TODO USER"
        });
    }

    public async update(
        id: number,
        entry: Partial<ApplicationUpdateModel>
    ): Promise<boolean> {
        const dbo: Partial<ApplicationDbo> = {};
        if (!isNil(entry.application)) {
            dbo.application = entry.application;
        }
        if (!isNil(entry.description)) {
            dbo.description = entry.description;
        }
        if (!isNil(entry.isActive)) {
            dbo.isActive = entry.isActive;
        }
        return this._applicationRepository.update(id, dbo);
    }

    public async listAll(): Promise<ReadonlyArray<ApplicationModel>> {
        const entities = await this._applicationRepository.listAll();
        return ApplicationMapper.mapListToModel(entities);
    }

    public async findById(id: number): Promise<Nullable<ApplicationModel>> {
        const entity = await this._applicationRepository.findById(id);
        return isNil(entity)
            ? entity
            : ApplicationMapper.mapItemToModel(entity)
        ;
    }

}
