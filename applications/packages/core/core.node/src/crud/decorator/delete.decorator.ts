import { IDecoratorFactory } from "./decorator.model";
import { HttpDecorator } from "./http.decorator";

export const HttpDelete = (path: string): IDecoratorFactory<any> => HttpDecorator("DELETE", path);
