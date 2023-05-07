import { FILTER_METADATA_KEY } from "../internal/filter-metadata.const";
import { Invoker } from "../internal/filter-metadata.model";

export const FilterDecorator = (invoker: Invoker) => {
    return (
        target: any,
        propertyKey: string
    ) => {
        if (!target[FILTER_METADATA_KEY]) {
            target[FILTER_METADATA_KEY] = {};
        }

        if (!target[FILTER_METADATA_KEY][propertyKey]) {
            target[FILTER_METADATA_KEY][propertyKey] = [];
        }

        target[FILTER_METADATA_KEY][propertyKey].push(invoker);
    }
}
