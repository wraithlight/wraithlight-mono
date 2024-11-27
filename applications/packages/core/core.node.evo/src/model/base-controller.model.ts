import { CONTROLLER_METADATA_KEY, INJECTION_NAME } from "../const";
import { ControllerHttpMetadata } from "./controller-http-metadata.model";

export interface IBaseController {
  [CONTROLLER_METADATA_KEY]: ControllerHttpMetadata;
  [INJECTION_NAME]: string;
}
