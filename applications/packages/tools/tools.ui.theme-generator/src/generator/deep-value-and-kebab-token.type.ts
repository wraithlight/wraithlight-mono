import { CamelToKebab } from "./camel-to-kebab.type";

export type DeepWithValueAndKebabToken<T, P extends string = ""> = {
  [K in keyof T]: T[K] extends string | number
    ? {
        value: T[K];
        token: P extends ""
          ? CamelToKebab<Extract<K, string>>
          : `wl-${P}-${CamelToKebab<Extract<K, string>>}`;
      }
    : T[K] extends object
      ? DeepWithValueAndKebabToken<
          T[K],
          P extends ""
            ? CamelToKebab<Extract<K, string>>
            : `wl-${P}-${CamelToKebab<Extract<K, string>>}`
        >
      : T[K];
};
