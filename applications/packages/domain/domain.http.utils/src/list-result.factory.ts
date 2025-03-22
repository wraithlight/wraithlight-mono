import { IListResult } from "@wraithlight/domain.http.types";

export function createListResult<T>(
  array: ReadonlyArray<T>,
  allCount: number,
  skip: number,
  take: number
): IListResult<T> {
  return {
    items: array,
    visibleCount: array.length,
    allCount: allCount,
    skip: skip,
    take: take,
  }
}
