import {
  TS_CONFIG,
  TS_CONFIG_BAK,
  TS_CONFIG_BUILD,
  swap
} from "./tsconfig-swap.mjs"

swap(TS_CONFIG_BAK, TS_CONFIG);
