export type MethodMetadataType = "GET" | "POST" | "DELETE" | "PATCH";

export interface MethodMetadata {
    path: string;
    name: string;
    type: MethodMetadataType;
}
