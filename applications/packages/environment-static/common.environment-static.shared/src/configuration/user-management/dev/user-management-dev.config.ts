import { UserManagementShared } from "@wraithlight/core.environment-static.types";

export const SHARED_DEV_USER_MANAGEMENT_CONFIG: Readonly<
  UserManagementShared> = {
  server: {
    port: 4500,
    baseUrl: "https://localhost"
  }
};
