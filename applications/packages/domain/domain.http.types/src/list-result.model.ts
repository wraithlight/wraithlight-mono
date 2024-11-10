export interface IListResult<T> {
  items: ReadonlyArray<T>;
  visibleCount: number;
  allCount: number;
  skip: number;
  take: number;
}
