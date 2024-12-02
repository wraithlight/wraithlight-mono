import { Request } from "express";
import { HttpVerb } from "@wraithlight/core.http";

import { FilterResult } from "../model";

export interface HandleControllerModel {
  injectionToken: string;
  endpoints: Array<HandlerControllerEndpointModel>;
}

export interface HandlerControllerEndpointModel {
  verb: HttpVerb;
  fullPath: string;
  methodName: string;
  params: Array<HandlerControllerParamModel>;
  filters: Array<HandlerControllerEndpointFilterModel>;
}

export interface HandlerControllerEndpointFilterModel {
  guardFn: (req: Request) => Promise<FilterResult> | FilterResult;
}

interface HandlerControllerParamModel {
  methodName: string;
  propertyIndex: number;
  extractorFn: <T>(req: Request) => T;
}