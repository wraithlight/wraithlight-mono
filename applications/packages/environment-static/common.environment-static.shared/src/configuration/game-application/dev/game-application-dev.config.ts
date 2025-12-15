import { GameApplicationShared } from "@wraithlight/core.environment-static.types";

export const SHARED_DEV_GAME_APPLICATION_CONFIG: Readonly<
  GameApplicationShared> = {
  server: {
    port: 5504,
    baseUrl: "http://www.dev.game-app.wraithlight.ai"
  }
};
