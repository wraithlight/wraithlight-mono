import { TENANT_CONFIG } from "@wraithlight/domain.ui.tenant-themes";
import { isEmptyStringOrNil } from "@wraithlight/framework.nullable";
import { join } from "path";

import { tenantThemeGeneratorFactory } from "./generator";

const libLocation = (libName: string) => join(__dirname, `../../../../ui/${libName}/src`);

const target = process.argv[2];

Object.entries(TENANT_CONFIG).forEach(m => {
  if (isEmptyStringOrNil(target) || (!isEmptyStringOrNil(target) && target.includes(m[0]))) {
    const generator = tenantThemeGeneratorFactory(libLocation(m[1].libName));
    generator(m[1].theme);
  }
});
