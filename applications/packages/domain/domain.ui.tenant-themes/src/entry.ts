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
import { EntryData } from "./entry.model";

export type T_UI_TENANTS =  ApplicationName.CommsNPS
  | ApplicationName.Content
  | ApplicationName.GameWebsite
  | ApplicationName.Notifier
  | ApplicationName.UserManagement
  | ApplicationName.Website
;

type T_UI_TENANT_CONFIG = Record<T_UI_TENANTS, EntryData>;

const createEntryData = (theme: TenantTheme, libName: string): EntryData => ({
  theme: theme,
  libName: libName
});

export const TENANT_CONFIG: T_UI_TENANT_CONFIG = {
  [ApplicationName.Content]: createEntryData(contentTheme, "core.ui.content.theme"),
  [ApplicationName.GameWebsite]: createEntryData(gameWebsiteTheme, "core.ui.game-website.theme"),
  [ApplicationName.Notifier]: createEntryData(notifierTheme, "core.ui.notifier.theme"),
  [ApplicationName.CommsNPS]: createEntryData(npsTheme, "core.ui.comms-nps.theme"),
  [ApplicationName.UserManagement]: createEntryData(userManagementTheme, "core.ui.user-management.theme"),
  [ApplicationName.Website]: createEntryData(websiteTheme, "core.ui.website.theme"),
};
