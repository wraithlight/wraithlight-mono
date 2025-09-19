import { BRAND_PROPERTY_NAME } from "@wraithlight/framework.brand.constants";

export type WlBrand<TType, TKey extends string> = TType & { [BRAND_PROPERTY_NAME]: TKey };
