export type MethodMetadataType = "GET" | "POST";

export interface MethodMetadata {
    path: string;
    name: string;
    type: MethodMetadataType;
}
