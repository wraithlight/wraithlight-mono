import { GameWebsiteShared } from "@wraithlight/core.environment-static.types";

export const SHARED_PRODUCTION_GAME_WEBSITE_CONFIG: Readonly<
  GameWebsiteShared> = {
  server: {
    port: 8080,
    baseUrl: "http://www.play.wraithlightgame.ai"
  }
};
