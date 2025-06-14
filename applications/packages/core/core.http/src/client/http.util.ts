import { Guid } from "@wraithlight/core.guid";

import { ConsolidatedHttpResponseError, ConsolidatedHttpResponseSuccess } from "./http.model";


export const createFailMessage = (
  statusCode: number,
  correlationId: Guid,
  errorCode: string
): ConsolidatedHttpResponseError => {
  return {
    isSuccess: false,
    isFail: true,
    statusCode: statusCode,
    isAborted: false,
    error: {
      code: errorCode
    },
    correlationId: correlationId
  };
};

export const createSuccessMessage = <T>(
  payload: T,
  statusCode: number,
  correlationId: Guid
): ConsolidatedHttpResponseSuccess<T> => {
  return {
    payload: payload,
    isSuccess: true,
    isFail: false,
    isAborted: false,
    statusCode: statusCode,
    correlationId: correlationId,
    error: {
      code: ""
    }
  };
};
