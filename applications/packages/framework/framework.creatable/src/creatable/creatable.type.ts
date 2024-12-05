// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/prefer-function-type
export type Creatable<T> = { new(...args: Array<any>): T };
