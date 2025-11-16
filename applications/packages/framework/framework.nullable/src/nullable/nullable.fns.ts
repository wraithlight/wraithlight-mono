import { Nullable } from "./nullable.type";

export function isNil(valueLike: unknown): valueLike is undefined | null {
  return isNilCore(valueLike);
}

export function isNan(valueLike: number): valueLike is number {
  return isNanCore(valueLike);
}

export function isNanOrNil(
  valueLike: Nullable<number>
): valueLike is undefined | null | typeof NaN {
  return isNilCore(valueLike) || isNanCore(valueLike);
}

export function isEmptyString(valueLike: string): valueLike is "" {
  return isEmptyStringCore(valueLike);
}

export function isEmptyStringOrNil(
  valueLike: Nullable<string>
): valueLike is undefined | null | "" {
  return isNilCore(valueLike) || isEmptyStringCore(valueLike);
}

function isEmptyStringCore(valueLike: string): valueLike is "" {
  return valueLike === "";
}

function isNanCore(valueLike: number): valueLike is number {
  // eslint-disable-next-line no-restricted-globals
  return isNaN(valueLike);
}

function isNilCore(valueLike: unknown): valueLike is undefined | null {
  // eslint-disable-next-line @wraithlight/wraithlight-eslint/no-null
  if (valueLike === null) {
    return true;
  }
  // eslint-disable-next-line no-undefined
  if (valueLike === undefined) {
    return true;
  }
  return false;
}
