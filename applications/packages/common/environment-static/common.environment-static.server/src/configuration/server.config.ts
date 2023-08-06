import { ApplicationName, EnvironmentType } from "@wraithlight/core.common-constant";
import { EnvironmentStaticServer } from "@wraithlight/core.environment-static.types";

import { SERVER_CONTENT_CONFIG } from "./content";
import { SERVER_EDITOR_CONFIG } from "./editor";
import { SERVER_FORUM_CONFIG } from "./forum";
import { SERVER_GAME_APPLICATION_CONFIG } from "./game-application";
import { SERVER_GAME_WEBSITE_CONFIG } from "./game-website";
import { SERVER_LOGS_CONFIG } from "./logs";
import { SERVER_USER_MANAGEMENT_CONFIG } from "./user-management";
import { SERVER_WEBSITE_CONFIG } from "./website";
import { SERVER_NOTIFIER_CONFIG } from "./notifier";

export const SERVER_CONFIG: Readonly<EnvironmentStaticServer> = {
    [ApplicationName.Content]: SERVER_CONTENT_CONFIG,
    [ApplicationName.Editor]: SERVER_EDITOR_CONFIG,
    [ApplicationName.Forum]: SERVER_FORUM_CONFIG,
    [ApplicationName.GameApplication]: SERVER_GAME_APPLICATION_CONFIG,
    [ApplicationName.GameWebsite]: SERVER_GAME_WEBSITE_CONFIG,
    [ApplicationName.Logs]: SERVER_LOGS_CONFIG,
    [ApplicationName.UserManagement]: SERVER_USER_MANAGEMENT_CONFIG,
    [ApplicationName.Website]: SERVER_WEBSITE_CONFIG,
    [ApplicationName.Notifier]: SERVER_NOTIFIER_CONFIG,
    // TODO: Move this to a separate object.
    common: {
        [EnvironmentType.Dev]: {
            paths: {
                base: "/",
                wildcard: "*"
            },
            files: {
                frontend: {
                    static: "../../dist/ui"
                }
            }
        },
        [EnvironmentType.Local]: {
            paths: {
                base: "/",
                wildcard: "*"
            },
            files: {
                frontend: {
                    static: "../ui"
                }
            }
        },
        [EnvironmentType.Test]: {
            paths: {
                base: "/",
                wildcard: "*"
            },
            files: {
                frontend: {
                    static: "../ui"
                }
            }
        }
    }
}
