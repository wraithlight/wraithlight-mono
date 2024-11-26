import { FilterDecorator } from "./filter-decorator.model";
import { HttpVerb } from "./http-verb.model";

export interface ControllerHttpRoute {
  path: string;
  fullPath: string;
  verb: HttpVerb;
  filters: Array<FilterDecorator>
}
