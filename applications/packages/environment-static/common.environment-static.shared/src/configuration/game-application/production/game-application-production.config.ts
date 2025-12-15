import { GameApplicationShared } from "@wraithlight/core.environment-static.types";

export const SHARED_PRODUCTION_GAME_APPLICATION_CONFIG: Readonly<
  GameApplicationShared> = {
  server: {
    port: 8080,
    baseUrl: "http://www.game-app.wraithlight.ai"
  }
};
