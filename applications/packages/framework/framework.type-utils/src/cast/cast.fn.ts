import { AnyOrT } from "../any-or-t";
import { UnknownOrT } from "../unknown-or-t";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const cast = <T>(obj: AnyOrT<T> | UnknownOrT<T>): T => obj as T;
