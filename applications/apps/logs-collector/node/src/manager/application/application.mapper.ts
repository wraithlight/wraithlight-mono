import { ApplicationModel } from "../../service";

import { ApplicationDetails } from "./application.model";

export class ApplicationMapper {

    public static mapListToModel(
        list: ReadonlyArray<ApplicationModel>
    ): ReadonlyArray<ApplicationDetails> {
        return list.map(m => this.mapItemToModel(m));
    }

    public static mapItemToModel(item: ApplicationModel): ApplicationDetails {
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            isActive: item.isActive,
            createdAt: item.createdAt,
            createdById: item.createdById,
        };
    }

}
