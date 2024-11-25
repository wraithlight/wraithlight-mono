import {
  HttpGet as _HttpGet,
  HttpDelete as _HttpDelete,
  HttpPatch as _HttpPatch,
  HttpPost as _HttpPost,
  HttpPut as _HttpPut
} from "./decorator";

export namespace HttpDecorators {
  export const httpGet = (path: string) => _HttpGet(path);
  export const httpDelete = (path: string) => _HttpDelete(path);
  export const httpPatch = (path: string) => _HttpPatch(path);
  export const httpPost = (path: string) => _HttpPost(path);
  export const httpPut = (path: string) => _HttpPut(path);
}
