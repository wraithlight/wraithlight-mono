import { IDecoratorFactory } from "./decorator.model";
import { HttpDecorator } from "./http.decorator";

export const HttpGet = (path: string): IDecoratorFactory<any> => HttpDecorator("GET", path);
