import { join } from "path";

import { TENANT_CONFIG } from "@wraithlight/domain.ui.tenant-themes";
import { isEmptyStringOrNil } from "@wraithlight/framework.nullable";

import { tenantThemeGeneratorFactory } from "./generator";

const libLocation = (libName: string): string => join(__dirname, `../../../../ui/${libName}/src`);

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const target = process.argv[2];

// eslint-disable-next-line max-len
const shouldGenerate = (libName: string): boolean => isEmptyStringOrNil(target) || (!isEmptyStringOrNil(target) && target.includes(libName));

Object.entries(TENANT_CONFIG).forEach(m => {
  if (!shouldGenerate(m[0])) return;
  const generator = tenantThemeGeneratorFactory(libLocation(m[1].libName));
  generator(m[1].theme);
});
