import { T_ANY } from "@wraithlight/kernel.any";

import { BaseController } from "../controller";
import { FILTER_METADATA_KEY, Invoker } from "../internal";

import { IDecoratorFactory } from "./decorator.model";

export const FilterDecorator = (invoker: Invoker): IDecoratorFactory<T_ANY> => {
  return (
    target: BaseController,
    propertyKey: string
  ) => {
    if (!target[FILTER_METADATA_KEY]) {
      target[FILTER_METADATA_KEY] = {};
    }

    if (!target[FILTER_METADATA_KEY][propertyKey]) {
      target[FILTER_METADATA_KEY][propertyKey] = [];
    }

    target[FILTER_METADATA_KEY][propertyKey].push(invoker);
  };
};
