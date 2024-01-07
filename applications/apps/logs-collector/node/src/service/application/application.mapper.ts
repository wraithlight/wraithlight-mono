import { ApplicationDbo } from "../../repository";

import { ApplicationModel } from "./application.model";

export class ApplicationMapper {

    public static mapListToModel(
        list: ReadonlyArray<ApplicationDbo>
    ): ReadonlyArray<ApplicationModel> {
        return list.map(m => this.mapItemToModel(m));
    }

    public static mapItemToModel(item: ApplicationDbo): ApplicationModel {
        return {
            id: item.id,
            name: item.application,
            description: item.description,
            isActive: item.isActive,
            createdAt: item.createdAt,
            createdById: item.createdBy
        };
    }

}
