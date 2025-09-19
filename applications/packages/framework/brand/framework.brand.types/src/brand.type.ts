import { BRAND_PROPERTY_NAME } from "@wraithlight/framework.brand.types";

export type WlBrand<TType, TKey extends string> = TType & { [BRAND_PROPERTY_NAME]: TKey };