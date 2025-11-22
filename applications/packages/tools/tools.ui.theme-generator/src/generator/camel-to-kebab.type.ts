type Digit = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9";

export type CamelToKebab<S extends string> =
  S extends `${infer F}${infer R}`
    ? R extends `${infer C}${string}`
      ? C extends Uncapitalize<C>
        ? C extends Digit
          ? `${Lowercase<F>}-${CamelToKebab<R>}`
          : `${Lowercase<F>}${CamelToKebab<R>}`
        : `${Lowercase<F>}-${CamelToKebab<R>}`
      : `${Lowercase<F>}`
    : S;
