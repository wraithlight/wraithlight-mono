// eslint-disable-next-line max-len
export type NonEmptyReadonlyArray<T> = ReadonlyArray<T> & [T, ...ReadonlyArray<T>];
