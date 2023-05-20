import { Guid } from "@wraithlight/core.types";

import { ApplicationName } from "./application-name.const";

export type ApplicationIdMap = {
    [key in ApplicationName]: Guid;
};

export const ApplicationId: ApplicationIdMap = Object.freeze({
    [ApplicationName.Content]: "bb2dbe19-705d-4ddf-98a7-14c19a9c0c60",
    [ApplicationName.Editor]: "61723a11-1deb-43fe-92c8-834420051706",
    [ApplicationName.Forum]: "8e61724d-ff95-4f8e-89d8-f644d8cb6c8c",
    [ApplicationName.GameApplication]: "8cf5631d-8bb4-4697-8c43-85b3a94da8dc",
    [ApplicationName.GameWebsite]: "d97a2422-ed75-46cb-90c6-6172a3e5949e",
    [ApplicationName.Logs]: "7ac64569-5a99-4afb-9180-ca8c1bec3822",
    [ApplicationName.UserManagement]: "a3d0db9e-3fb5-414a-9f6c-1bf034339322",
    [ApplicationName.Website]: "7777ba27-da56-4ddd-ae97-f38a1e48effa"
});
