import { GameApplicationServer } from "@wraithlight/core.environment-static.types";

export const SERVER_PRODUCTION_GAME_APPLICATION_CONFIG: Readonly<
    GameApplicationServer> = {
    database: {
        host: "",
        port: 0,
        username: "",
        password: "",
        database: "",
    }
};
