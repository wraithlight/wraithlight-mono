import { ApplicationName } from "@wraithlight/core.common-constant";
import { Guid } from "@wraithlight/core/core.types";

export interface Application {
    id: Guid;
    displayName: ApplicationName;
}
