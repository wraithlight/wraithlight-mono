import {
  Request
} from "express";
import { FilterDecoratorResult } from "../model";

export const FilterDecorator = (
  // TODO: Model.
  callback: (
    request: Request
  ) => Promise<FilterDecoratorResult> | FilterDecoratorResult
) => {

}