import {
  Request
} from "express";
import { FilterDecoratorResult } from "../model";

export const FilterDecorator = (
  callback: (
    request: Request
  ) => Promise<FilterDecoratorResult> | FilterDecoratorResult
) => {

}