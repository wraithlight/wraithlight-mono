import { GameWebsiteServer } from "@wraithlight/core.environment-static.types";

export const SERVER_PRODUCTION_GAME_WEBSITE_CONFIG: Readonly<
    GameWebsiteServer> = {
    database: {
        host: "",
        port: 0,
        username: "",
        password: "",
        database: "",
    }
};
