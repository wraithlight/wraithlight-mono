import { HttpController } from "./controller";
import {
  DeleteDecorator,
  GetDecorator,
  PatchDecorator,
  PostDecorator,
  PutDecorator
} from "./method";
import {
  BodyDecorator,
  HeaderDecorator,
  PathDecorator,
  QueryDecorator
} from "./param";

export {
  IParamDecorator
} from "./param"

export {
  createFilterAttribute,
  createFailResponse,
  createSuccessResponse
} from "./method";

export namespace HttpDecorators {
  export const httpDelete = DeleteDecorator;
  export const httpGet = GetDecorator;
  export const httpPatch = PatchDecorator;
  export const httpPost = PostDecorator;
  export const httpPut = PutDecorator;
  export const httpController = HttpController;

  export const fromBody = BodyDecorator;
  export const fromHeader = HeaderDecorator;
  export const fromPath = PathDecorator;
  export const fromQuery = QueryDecorator;
}
