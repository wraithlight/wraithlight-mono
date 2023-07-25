import { Guid } from "@wraithlight/core.types";
import { ApplicationId, ApplicationName } from "@wraithlight/core.common-constant";

export function applicationNameById(id: Guid): ApplicationName {
    const entry = Object.entries(ApplicationId).find(m => m[1] === id);
    if (!entry) {
        throw `Application with id '${id}' was not found!`;
    }
    const applicationName = Object.entries(ApplicationName).find(m => m[1] === entry[0]);
    if (!applicationName) {
        throw `Application with id '${id}' was not found!`;
    }
    return applicationName[1];
}
