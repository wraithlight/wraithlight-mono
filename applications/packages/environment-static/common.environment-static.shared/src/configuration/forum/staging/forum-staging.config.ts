import { ForumShared } from "@wraithlight/core.environment-static.types";

export const SHARED_STAGING_FORUM_CONFIG: Readonly<
  ForumShared> = {
  server: {
    port: 8080,
    baseUrl: "http://www.staging.forum.wraithlight.ai"
  }
};
