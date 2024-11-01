import { IDecoratorFactory } from "./decorator.model";
import { HttpDecorator } from "./http.decorator";

export const HttpPatch = (path: string): IDecoratorFactory<any> => HttpDecorator(
    "POST",
    path
);
