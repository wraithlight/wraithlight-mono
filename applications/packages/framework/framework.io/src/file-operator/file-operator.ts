import { readFileSync } from "fs";

import {
  isEmptyStringOrNil
} from "@wraithlight/framework.nullable";
import {
  OperationResult,
  OperationResultFactory,
  isErrorResult
} from "@wraithlight/framework.operation-result";
import { cast } from "@wraithlight/framework.type-utils";

import {
  ERROR_IO_ACCESS,
  ERROR_IO_BAD_DESCRIPTOR,
  ERROR_IO_IS_DIR,
  ERROR_IO_NAME_TOO_LONG,
  ERROR_IO_NOT_DIR,
  ERROR_IO_NOT_EXIST,
  ERROR_IO_PERMISSION,
  ERROR_IO_TOO_MANY_OPEN,
  ERROR_IO_UNKNOWN,
  E_NO_CODE,
  NATIVE_EACCES,
  NATIVE_EBADF,
  NATIVE_EISDIR,
  NATIVE_EMFILE,
  NATIVE_ENAMETOOLONG,
  NATIVE_ENOENT,
  NATIVE_ENOTDIR,
  NATIVE_EPERM
} from "./file-operator.const";

export class FileOperator {

  public static readFileText(
    path: string
  ): OperationResult<string> {
    return this.readFileString(path);
  }

  public static readFileJson<T>(
    path: string
  ): OperationResult<T> {
    const result = this.readFileText(path);
    if (isErrorResult(result)) {
      return OperationResultFactory.error(...result.errors);
    }
    try {
      const content = cast<T>(JSON.parse(result.payload));
      return OperationResultFactory.success(content);
    } catch {
      return OperationResultFactory.error("E_JSON_PARSE");
    }
  }

  private static readFileString(
    path: string
  ): OperationResult<string> {
    try {
      const content = readFileSync(path).toString();
      return OperationResultFactory.success(content);
    } catch (e) {
      const error = cast<NodeJS.ErrnoException>(e);
      const code = isEmptyStringOrNil(error.code)
        ? E_NO_CODE
        : error.code
      ;
      switch (code) {
        /* eslint-disable max-len */
        case NATIVE_ENOENT: return OperationResultFactory.error(ERROR_IO_NOT_EXIST);
        case NATIVE_EACCES: return OperationResultFactory.error(ERROR_IO_ACCESS);
        case NATIVE_EPERM: return OperationResultFactory.error(ERROR_IO_PERMISSION);
        case NATIVE_EISDIR: return OperationResultFactory.error(ERROR_IO_IS_DIR);
        case NATIVE_EMFILE: return OperationResultFactory.error(ERROR_IO_TOO_MANY_OPEN);
        case NATIVE_ENAMETOOLONG: return OperationResultFactory.error(ERROR_IO_NAME_TOO_LONG);
        case NATIVE_ENOTDIR: return OperationResultFactory.error(ERROR_IO_NOT_DIR);
        case NATIVE_EBADF: return OperationResultFactory.error(ERROR_IO_BAD_DESCRIPTOR);
        default: return OperationResultFactory.error(ERROR_IO_UNKNOWN, code);
        /* eslint-enable max-len */
      }
    }
  }
}
