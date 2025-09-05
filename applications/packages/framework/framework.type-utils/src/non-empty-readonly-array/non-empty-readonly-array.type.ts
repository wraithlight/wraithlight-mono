export type NonEmptyReadonlyArray<T> = ReadonlyArray<T> & [T, ...T[]];
