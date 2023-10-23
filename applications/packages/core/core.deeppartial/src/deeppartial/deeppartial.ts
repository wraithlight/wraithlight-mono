/**
 * @deprecated Import from `core.deepmerge` instead.
 */
export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
