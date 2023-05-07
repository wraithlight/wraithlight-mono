import { HttpDecorator } from "./http.decorator";

export const HttpPost = (path: string) => HttpDecorator("POST", path);
