import { IBaseController } from "./base-controller.model";

// TODO: rename to http method decorator sinde http controller decorator will exist as well
export type HttpDecorator = <TController extends IBaseController, TMethod>(
  target: TController,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<TMethod>
) => TypedPropertyDescriptor<TMethod>;
