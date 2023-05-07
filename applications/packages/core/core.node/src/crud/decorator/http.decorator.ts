import { METHOD_METADATA_KEY } from "../internal/method-metadata.const";
import {
    MethodMetadata,
    MethodMetadataType
} from "../internal/method-metadata.model";

export const HttpDecorator = (
    verb: MethodMetadataType,
    path: string
) => {
    return (
        target: any,
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
