export interface ListModel<T> {
    skip: number;
    count: number;
    items: Array<T>;
    remaining: number;
}
