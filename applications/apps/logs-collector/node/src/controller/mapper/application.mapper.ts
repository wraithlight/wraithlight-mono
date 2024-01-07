import { ApplicationDetailsModel } from "@wraithlight/logs-collector/core.logs-collector.types";

import { ApplicationDetails } from "../../manager";

export class ApplicationMapper {

    public static toDtoDetailsItem(item: ApplicationDetails): ApplicationDetailsModel {
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            isActive: item.isActive,
            createdAt: item.createdAt,
            createdById: item.createdById
        };
    }

    public static toDtoDetailsList(list: ReadonlyArray<ApplicationDetails>): ReadonlyArray<ApplicationDetailsModel> {
        return list.map(m => this.toDtoDetailsItem(m));
    }

}
