import { CONTROLLER_METADATA_KEY } from "../internal/controller-metadata.const";
import { ControllerMetadata } from "../internal/controller-metadata.model";
import { METHOD_METADATA_KEY } from "../internal/method-metadata.const";

export const HttpController = (path: string) => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        const controllerMethods = constructor.prototype[METHOD_METADATA_KEY] ?? [];
        const metadata: ControllerMetadata = {
            baseUrl: path,
            methods: controllerMethods
        };
        return class extends constructor {
            [CONTROLLER_METADATA_KEY] = metadata
        };
    }
}