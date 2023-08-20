import { Guid } from "@wraithlight/core.types";

export interface CqrsContentModel<T> {
    id: Guid;
    data: T;
}

export interface CqrsProcessor<T> {
    (item: T, id: Guid): void | Promise<void>
}
