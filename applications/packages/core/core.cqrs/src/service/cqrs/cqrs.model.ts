import { Guid } from "@wraithlight/core.guid";

export interface CqrsContentModel<T> {
    id: Guid;
    data: T;
}

export type CqrsProcessor<T>  = (item: T, id: Guid) => void | Promise<void>;
