import { HttpCode } from "@wraithlight/core.http";

interface FilterBaseResult {
  isSuccess: boolean;
  isError: boolean;
}

interface FitlerSuccessResult extends FilterBaseResult {
  isSuccess: true;
  isError: false;
}

interface FilterErrorResult extends FilterBaseResult {
  isSuccess: false;
  isError: true;
  errorHttpCode: HttpCode;
  errorMessage: string;
}

export type FilterResult = FitlerSuccessResult | FilterErrorResult;

