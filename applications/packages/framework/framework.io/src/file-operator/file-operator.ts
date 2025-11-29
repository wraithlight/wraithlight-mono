import { readFileSync, writeFileSync } from "fs";

import {
  isEmptyStringOrNil
} from "@wraithlight/framework.nullable";
import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";
import { cast } from "@wraithlight/framework.type-utils";
import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";

import {
  ERROR_IO_ACCESS,
  ERROR_IO_BAD_DESCRIPTOR,
  ERROR_IO_INVALID_ARGUMENT,
  ERROR_IO_IS_DIR,
  ERROR_IO_NAME_TOO_LONG,
  ERROR_IO_NOT_DIR,
  ERROR_IO_NOT_EXIST,
  ERROR_IO_NO_SPACE,
  ERROR_IO_PERMISSION,
  ERROR_IO_READONLY_FS,
  ERROR_IO_RESOURCE_BUSY,
  ERROR_IO_TOO_MANY_OPEN,
  ERROR_IO_UNKNOWN,
  E_NO_CODE,
  NATIVE_EACCES,
  NATIVE_EBADF,
  NATIVE_EBUSY,
  NATIVE_EINVAL,
  NATIVE_EISDIR,
  NATIVE_EMFILE,
  NATIVE_ENAMETOOLONG,
  NATIVE_ENFILE,
  NATIVE_ENOENT,
  NATIVE_ENOSPC,
  NATIVE_ENOTDIR,
  NATIVE_EPERM,
  NATIVE_EROFS,
  NATIVE_ETXTBSY
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
    if (result.isErrorTC()) {
      return OperationResultFactory.error(...result.errors);
    }
    try {
      const content = cast<T>(JSON.parse(result.payload));
      return OperationResultFactory.success(content);
    } catch {
      return OperationResultFactory.error("E_JSON_PARSE");
    }
  }

  public static writeFileText(
    path: string,
    data: string
  ): OperationResult<void> {
    return this.writeFileString(path, data);
  }

  public static writeFileJson<T>(
    path: string,
    data: T,
    minifyJson = true
  ): OperationResult<void> {
    try {
      const payload = minifyJson
        ? JSON.stringify(data)
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        : JSON.stringify(data, GLOBAL_UNDEFINED, 2)
      ;
      return this.writeFileString(path, payload);
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

  private static writeFileString(
    path: string,
    data: string
  ): OperationResult<void> {
    try {
      writeFileSync(path, data);
      return OperationResultFactory.success(GLOBAL_UNDEFINED);
    } catch (e) {
      const error = cast<NodeJS.ErrnoException>(e);
      const code = isEmptyStringOrNil(error.code)
        ? E_NO_CODE
        : error.code
      ;
      switch (code) {
        /* eslint-disable max-len */
        case NATIVE_EACCES: return OperationResultFactory.error(ERROR_IO_ACCESS);
        case NATIVE_EPERM: return OperationResultFactory.error(ERROR_IO_PERMISSION);
        case NATIVE_ENOENT: return OperationResultFactory.error(ERROR_IO_NOT_EXIST);
        case NATIVE_EISDIR: return OperationResultFactory.error(ERROR_IO_IS_DIR);
        case NATIVE_ENOSPC: return OperationResultFactory.error(ERROR_IO_NO_SPACE);
        case NATIVE_EROFS: return OperationResultFactory.error(ERROR_IO_READONLY_FS);
        case NATIVE_ENAMETOOLONG: return OperationResultFactory.error(ERROR_IO_NAME_TOO_LONG);
        case NATIVE_EMFILE: return OperationResultFactory.error(ERROR_IO_TOO_MANY_OPEN);
        case NATIVE_ENFILE: return OperationResultFactory.error(ERROR_IO_TOO_MANY_OPEN);
        case NATIVE_EBUSY: return OperationResultFactory.error(ERROR_IO_RESOURCE_BUSY);
        case NATIVE_ETXTBSY: return OperationResultFactory.error(ERROR_IO_RESOURCE_BUSY);
        case NATIVE_EINVAL: return OperationResultFactory.error(ERROR_IO_INVALID_ARGUMENT);
        default: return OperationResultFactory.error(ERROR_IO_UNKNOWN, code);
        /* eslint-enable max-len */
      }
    }
  }
}
