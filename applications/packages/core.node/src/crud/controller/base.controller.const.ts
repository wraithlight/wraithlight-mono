// TODO: Move these to core.http/const.

export enum HttpCodes {
    Ok = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    Conflict = 409,
    InternalError = 500
};

export enum HttpHeaders {
    ApplicationJson = "application/json"
}