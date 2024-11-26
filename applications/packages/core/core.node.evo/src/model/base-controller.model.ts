import { CONTROLLER_METADATA_KEY } from "../const";
import { ControllerHttpMetadata } from "./controller-http-metadata.model";

export interface IBaseController {
  [CONTROLLER_METADATA_KEY]: ControllerHttpMetadata
}
