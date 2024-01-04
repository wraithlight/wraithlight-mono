import { Nullable } from "@wraithlight/core.nullable";

import { ApplicationRepository } from "../../repository";
import { ApplicationNameWithId } from "./application.model";

export class ApplicationService {

    private readonly _applicationRepository = new ApplicationRepository();

    public findApplicationNameById(id: number): Promise<Nullable<string>> {
        return this._applicationRepository.findName(id);
    }

    public findAllApplicationNames(): Promise<ReadonlyArray<ApplicationNameWithId>> {
        return this._applicationRepository
            .listAll()
            .then(m => m.map(o => ({
                name: o.application,
                id: o.id
            })))
        ;
    }

}
