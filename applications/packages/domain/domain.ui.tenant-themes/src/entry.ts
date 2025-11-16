import { TenantTheme } from "@wraithlight/core.ui.types";
import { ApplicationName } from "@wraithlight/domain.application-info.constants";

import {
  contentTheme,
  gameWebsiteTheme,
  notifierTheme,
  npsTheme,
  userManagementTheme,
  websiteTheme,
} from "./tenants";

export type T_UI_TENANTS =  ApplicationName.CommsNPS
  | ApplicationName.Content
  | ApplicationName.GameWebsite
  | ApplicationName.Notifier
  | ApplicationName.UserManagement
  | ApplicationName.Website
;

type T_UI_TENANT_CONFIG = Record<T_UI_TENANTS, TenantTheme>;

export const TENANT_CONFIG: T_UI_TENANT_CONFIG = {
  [ApplicationName.Content]: contentTheme,
  [ApplicationName.GameWebsite]: gameWebsiteTheme,
  [ApplicationName.Notifier]: notifierTheme,
  [ApplicationName.CommsNPS]: npsTheme,
  [ApplicationName.UserManagement]: userManagementTheme,
  [ApplicationName.Website]: websiteTheme,
};
