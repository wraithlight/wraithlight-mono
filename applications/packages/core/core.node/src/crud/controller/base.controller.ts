import { HttpCode, HttpHeader } from "@wraithlight/core.http";
import { Predicate } from "@wraithlight/core.linq";
import { T_ANY } from "@wraithlight/kernel.any";
import { Request, Response } from "express";

import { PARAM_PROPERTY_KEY } from "../decorator";
import {
  CONTROLLER_METADATA_KEY,
  ControllerMetadata,
  FILTER_METADATA_KEY,
  FilterMetadata,
  METHOD_METADATA_KEY,
  MethodMetadata
} from "../internal";

export abstract class BaseController {

  private response: Response | undefined;

  [key: string]: unknown | (() => void);

  public [FILTER_METADATA_KEY]: FilterMetadata | undefined;
  public [CONTROLLER_METADATA_KEY]: ControllerMetadata | undefined;
  public [METHOD_METADATA_KEY]: Array<MethodMetadata> | undefined;
  // TODO: Type.
  // eslint-disable-next-line max-len
  public [PARAM_PROPERTY_KEY]: { [key: keyof BaseController]: { contextExecutor: Predicate<Request, T_ANY>, parameters: Array<Predicate<unknown, unknown>> } } | undefined;

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
    this.json(
      HttpCode.Ok,
      data
    );
  }

  protected created<TData>(data?: TData): void {
    this.json(
      HttpCode.Created,
      data
    );
  }

  protected badRequest<TData>(data?: TData): void {
    this.json(
      HttpCode.BadRequest,
      data
    );
  }

  protected unauthorized<TData>(data?: TData): void {
    this.json(
      HttpCode.Unauthorized,
      data
    );
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
