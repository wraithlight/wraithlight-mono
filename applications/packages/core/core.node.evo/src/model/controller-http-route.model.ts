import { FilterDecoratorResult } from "./filter-decorator-result.model";
import { HttpVerb } from "./http-verb.model";

export interface ControllerHttpRoute {
  path: string;
  fullPath: string;
  verb: HttpVerb;
  // TODO: Model.
  filters: [(req: Request) => Promise<FilterDecoratorResult> | FilterDecoratorResult]
}
