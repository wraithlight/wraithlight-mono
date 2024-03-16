import { HttpCode } from "../constant";

export const JSON_HEADERS: HeadersInit = {
    [HttpHeaderName.ContentType]: HttpHeader.ApplicationJson,
    [HttpHeaderName.Accept]: HttpHeader.ApplicationJson
};

export const SUCCESS_HTTP_CODES: ReadonlyArray<HttpCode> = [
    HttpCode.Ok,
    HttpCode.Created
];

export const enum HttpHeaderName {
    ContentType = "Content-Type",
    Accept = "accept"
}

export const enum HttpHeader {
    ApplicationJson = "application/json"
}