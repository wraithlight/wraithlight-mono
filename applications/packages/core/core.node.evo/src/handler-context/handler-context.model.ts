import { Request } from "express";
import { HttpVerb } from "@wraithlight/core.http";

import { FilterResult } from "../model";

export interface HandlerContextModel {
  params: Array<HandlerContextParamModel>;
  filters: Array<HandlerContextFilterModel>;
  methods: Array<HandlerContextMethodModel>;
  class: HandlerContextClassModel;
}

export interface HandlerContextParamModel {
  methodName: string;
  propertyIndex: number;
  extractorFn: <T>(req: Request) => T;
}

export interface HandlerContextFilterModel {
  methodName: string;
  guardFn: (req: Request) => Promise<FilterResult> | FilterResult;
}

interface HandlerContextMethodModel {
  path: string;
  verb: HttpVerb;
  methodName: string;
}

interface HandlerContextClassModel {
  basePath: string;
  injectionToken: string;
}
