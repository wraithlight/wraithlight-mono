import { Request } from "express";

import { FilterDecoratorResult } from "./filter-decorator-result.model";

export type FilterDecorator = (
  req: Request
) => Promise<FilterDecoratorResult> | FilterDecoratorResult;
