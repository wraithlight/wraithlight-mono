import { Guid } from "@wraithlight/core.types";
import { LoginScope } from "@wraithlight/core.auth-common";

export const SCOPE_NAME_MAP: {[key: string]: Guid } = Object.freeze({
    [LoginScope.Website]: "7777ba27-da56-4ddd-ae97-f38a1e48effa",
    [LoginScope.GameWebsite]: "d97a2422-ed75-46cb-90c6-6172a3e5949e",
    [LoginScope.GameApplication]: "8cf5631d-8bb4-4697-8c43-85b3a94da8dc",
    [LoginScope.Content]: "bb2dbe19-705d-4ddf-98a7-14c19a9c0c60",
    [LoginScope.UserManagement]: "a3d0db9e-3fb5-414a-9f6c-1bf034339322",
    [LoginScope.Forum]: "8e61724d-ff95-4f8e-89d8-f644d8cb6c8c",
    [LoginScope.Logs]: "7ac64569-5a99-4afb-9180-ca8c1bec3822",
    [LoginScope.Editor]: "61723a11-1deb-43fe-92c8-834420051706"
});
