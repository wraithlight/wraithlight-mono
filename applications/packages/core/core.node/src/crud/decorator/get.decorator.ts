import { HttpDecorator } from "./http.decorator";

export const HttpGet = (path: string) => HttpDecorator("GET", path);
