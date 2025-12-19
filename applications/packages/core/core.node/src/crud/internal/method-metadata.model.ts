export type MethodMetadataType = "GET" | "POST" | "DELETE";

export interface MethodMetadata {
  path: string;
  name: string;
  type: MethodMetadataType;
}
