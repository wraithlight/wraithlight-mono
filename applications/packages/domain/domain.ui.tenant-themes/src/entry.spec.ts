import { ApplicationName } from "@wraithlight/domain.application-info.constants";

import { T_UI_TENANTS, TENANT_CONFIG } from "./entry";

const TENANTS_WITH_FE: ReadonlyArray<T_UI_TENANTS>  = [
  ApplicationName.Content,
  ApplicationName.GameWebsite,
  ApplicationName.Notifier,
  ApplicationName.CommsNPS,
  ApplicationName.UserManagement,
  ApplicationName.Website,
];

describe("TENANT_CONFIGSpecs", () => {
  describe("given the config is initialized", () => {
    it("must contain all the tenants with FE", () => {
      expect(Object.keys(TENANT_CONFIG)).toHaveLength(TENANTS_WITH_FE.length);
      expect(TENANT_CONFIG).toBeInstanceOf(Object);
    });
    it.each(TENANTS_WITH_FE)("it must contain %s", (tenantName: T_UI_TENANTS) => {
      expect(TENANT_CONFIG).toHaveProperty(tenantName);

      const tenantConfig = TENANT_CONFIG[tenantName];

      expect(tenantConfig).not.toBeNull();
      expect(tenantConfig).not.toBeUndefined();
      expect(tenantConfig).toBeDefined();
      expect(tenantConfig).toBeInstanceOf(Object);
    });
  });
});
