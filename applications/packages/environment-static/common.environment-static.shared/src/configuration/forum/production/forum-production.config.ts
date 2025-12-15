import { ForumShared } from "@wraithlight/core.environment-static.types";

export const SHARED_PRODUCTION_FORUM_CONFIG: Readonly<
  ForumShared> = {
  server: {
    port: 8080,
    baseUrl: "http://www.forum.wraithlight.ai"
  }
};
