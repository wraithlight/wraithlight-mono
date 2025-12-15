import { GameApplicationShared } from "@wraithlight/core.environment-static.types";

export const SHARED_LOCAL_GAME_APPLICATION_CONFIG: Readonly<
  GameApplicationShared> = {
  server: {
    port: 4504,
    baseUrl: "http://www.local.game-app.wraithlight.ai"
  }
};
