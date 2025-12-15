import { GameApplicationShared } from "@wraithlight/core.environment-static.types";

export const SHARED_STAGING_GAME_APPLICATION_CONFIG: Readonly<
  GameApplicationShared> = {
  server: {
    port: 8080,
    baseUrl: "http://www.staging.game-app.wraithlight.ai"
  }
};
