import {
  HttpDecorator,
  HttpVerb,
  IBaseController
} from "../model";

export const BaseHttpDecorator = (
  path: string,
  verb: HttpVerb
): HttpDecorator => <TController extends IBaseController, TMethod>(
  target: TController,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<TMethod>
) => {
  // TODO: populate the TController properties properly
  return descriptor;
};
