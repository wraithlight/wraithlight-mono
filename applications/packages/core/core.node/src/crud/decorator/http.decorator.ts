import { T_ANY } from "@wraithlight/kernel.any";

import { BaseController } from "../controller";
import {
  METHOD_METADATA_KEY,
  MethodMetadata,
  MethodMetadataType
} from "../internal";

import { IDecoratorFactory } from "./decorator.model";

export const HttpDecorator = (
  verb: MethodMetadataType,
  path: string
): IDecoratorFactory<T_ANY> => {
  return (
    target: BaseController,
    propertyKey: string
  ) => {
    const metadata: MethodMetadata = {
      path: path,
      type: verb,
      name: propertyKey
    };
    if (!target[METHOD_METADATA_KEY]) {
      target[METHOD_METADATA_KEY] = [];
    }
    target[METHOD_METADATA_KEY].push(metadata);
  };
};
