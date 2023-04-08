import { Response } from "express";

import { CONTROLLER_METADATA_KEY } from "../internal/controller-metadata.const";
import { ControllerMetadata } from "../internal/controller-metadata.model";
import { FILTER_METADATA_KEY } from "../internal/filter-metadata.const";
import { FilterMetadata } from "../internal/filter-metadata.model";
import { METHOD_METADATA_KEY } from "../internal/method-metadata.const";
import { MethodMetadata } from "../internal/method-metadata.model";

import {
    HttpCodes,
    HttpHeaders
} from "./base.controller.const";

export abstract class BaseController {

    private response: Response | undefined;

    [key: string]: Function | unknown;

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

    protected ok<TData>(data?: TData): void {
        this.json(HttpCodes.Ok, data);
    }

    protected created(): void {
        this.json(HttpCodes.Created);
    }

    protected badRequest<TData>(data?: TData): void {
        this.json(HttpCodes.BadRequest);
    }

    protected unauthorized<TData>(data?: TData): void {
        this.json(HttpCodes.Unauthorized, data);
    }

    protected notFound(): void {
        this.json(HttpCodes.NotFound);
    }

    protected conflict(): void {
        this.json(HttpCodes.Conflict);
    }

    protected internalError(): void {
        this.json(HttpCodes.InternalError);
    }

    private json<TData>(code: HttpCodes, body?: TData): void {
        this.response?.status(code);
        this.response?.contentType(HttpHeaders.ApplicationJson);
        this.response?.send(body);
    }

}
