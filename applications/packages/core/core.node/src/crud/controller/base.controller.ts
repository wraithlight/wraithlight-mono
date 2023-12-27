import { Response } from "express";
import { HttpCode, HttpHeader } from "@wraithlight/core.http";

import { CONTROLLER_METADATA_KEY } from "../internal/controller-metadata.const";
import { ControllerMetadata } from "../internal/controller-metadata.model";
import { FILTER_METADATA_KEY } from "../internal/filter-metadata.const";
import { FilterMetadata } from "../internal/filter-metadata.model";
import { METHOD_METADATA_KEY } from "../internal/method-metadata.const";
import { MethodMetadata } from "../internal/method-metadata.model";

export abstract class BaseController {

    private response: Response | undefined;

    [key: string]: unknown | (() => void);

    public [FILTER_METADATA_KEY]: FilterMetadata | undefined;
    public [CONTROLLER_METADATA_KEY]: ControllerMetadata | undefined;
    public [METHOD_METADATA_KEY]: Array<MethodMetadata> | undefined;

    /**
     * This is being used by the controller binder.
     * Do not use this!
     * @param {Request} response
     */
    public setResponseContext(response: Response): void {
        this.response = response;
    }

    // TODO: These should return another function, that sends the response.

    protected ok<TData>(data?: TData): void {
        this.json(HttpCode.Ok, data);
    }

    protected created<TData>(data?: TData): void {
        this.json(HttpCode.Created, data);
    }

    protected badRequest<TData>(data?: TData): void {
        this.json(HttpCode.BadRequest, data);
    }

    protected unauthorized<TData>(data?: TData): void {
        this.json(HttpCode.Unauthorized, data);
    }

    protected notFound(): void {
        this.json(HttpCode.NotFound);
    }

    protected noContent(): void {
        this.json(HttpCode.NoContent);
    }

    protected conflict(): void {
        this.json(HttpCode.Conflict);
    }

    protected internalError(): void {
        this.json(HttpCode.InternalError);
    }

    private json<TData>(code: HttpCode, body?: TData): void {
        this.response?.status(code);
        this.response?.contentType(HttpHeader.ApplicationJson);
        this.response?.send(body);
    }

}
