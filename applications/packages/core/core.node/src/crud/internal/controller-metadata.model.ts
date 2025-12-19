import { MethodMetadata } from "./method-metadata.model";

export interface ControllerMetadata {
  baseUrl: string;
  methods: Array<MethodMetadata>;
}
