import { T_ANY } from "@wraithlight/kernel.any";

import {
  CONTROLLER_METADATA_KEY,
  ControllerMetadata,
  METHOD_METADATA_KEY
} from "../internal";

export const HttpController = (path: string) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/prefer-function-type
  return <T extends { new(...args: Array<T_ANY>): object }>(constructor: T) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const controllerMethods = constructor
      .prototype[METHOD_METADATA_KEY] ?? [];
    const metadata: ControllerMetadata = {
      baseUrl: path,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      methods: controllerMethods
    };
    return class extends constructor {
      public [CONTROLLER_METADATA_KEY] = metadata;
    };
  };
};