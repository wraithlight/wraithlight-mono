import { ControllerHttpRoute } from "./controller-http-route.model";
import { InjectionScope } from "./controller-injection-scope.model";

export interface ControllerHttpMetadata {
  basePath: string;
  scope: InjectionScope,
  routes: Array<ControllerHttpRoute>;
}
