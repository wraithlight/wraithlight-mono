export type CamelToKebab<S extends string> =
  S extends `${infer F}${infer R}`
    ? R extends Uncapitalize<R>
      ? `${Lowercase<F>}${CamelToKebab<R>}`
      : `${Lowercase<F>}-${CamelToKebab<R>}`
    : S;
