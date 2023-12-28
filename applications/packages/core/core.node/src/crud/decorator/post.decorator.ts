import { IDecoratorFactory } from "./decorator.model";
import { HttpDecorator } from "./http.decorator";

export const HttpPost = (path: string): IDecoratorFactory<any> => HttpDecorator("POST", path);
