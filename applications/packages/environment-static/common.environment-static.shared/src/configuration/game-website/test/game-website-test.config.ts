import { GameWebsiteShared } from "@wraithlight/core.environment-static.types";

export const SHARED_TEST_GAME_WEBSITE_CONFIG: Readonly<
  GameWebsiteShared> = {
  server: {
    port: 8080,
    baseUrl: "http://www.test.game-app.wraithlight.ai"
  }
};
