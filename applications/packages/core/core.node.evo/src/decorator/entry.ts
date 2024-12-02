import { HttpController } from "./controller";
import {
  DeleteDecorator,
  GetDecorator,
  PatchDecorator,
  PostDecorator,
  PutDecorator
} from "./method";

export namespace HttpDecorators {
  export const httpDelete = DeleteDecorator;
  export const httpGet = GetDecorator;
  export const httpPatch = PatchDecorator;
  export const httpPost = PostDecorator;
  export const httpPut = PutDecorator;
  export const httpController = HttpController;
}
