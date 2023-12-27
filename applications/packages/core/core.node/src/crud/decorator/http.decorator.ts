import { BaseController } from "../controller";
import { METHOD_METADATA_KEY } from "../internal/method-metadata.const";
import {
    MethodMetadata,
    MethodMetadataType
} from "../internal/method-metadata.model";
import { IDecoratorFactory } from "./decorator.model";

export const HttpDecorator = (
    verb: MethodMetadataType,
    path: string
): IDecoratorFactory<any> => {
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
    }
}
