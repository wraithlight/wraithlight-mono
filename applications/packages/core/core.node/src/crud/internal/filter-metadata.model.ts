import { Request } from "express";

export interface FilterResult {
  success: boolean;
  errorHttpCode?: number;
}

export type Invoker = (req: Request) => Promise<FilterResult>;

export interface FilterMetadata {
  [methodName: string]: Array<Invoker>
}
