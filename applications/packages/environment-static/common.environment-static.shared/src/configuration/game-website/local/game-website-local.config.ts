import { GameWebsiteShared } from "@wraithlight/core.environment-static.types";

export const SHARED_LOCAL_GAME_WEBSITE_CONFIG: Readonly<
  GameWebsiteShared> = {
  server: {
    port: 4505,
    baseUrl: "http://www.local.game-web.wraithlight.ai"
  }
};
