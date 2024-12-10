import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";
import { cast } from "@wraithlight/framework.type-utils";
import { readFileSync } from "fs";

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
    if (!result.isSuccess) {
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
    } catch (e: any) {
      switch(e.code) {
        case "ENOENT": return OperationResultFactory.error("E_IO_NOT_EXIST");
        case "EACCES": return OperationResultFactory.error("E_IO_ACCESS");
        case "EPERM": return OperationResultFactory.error("E_IO_PERMISSION");
        case "EISDIR": return OperationResultFactory.error("E_IO_IS_DIR");
        case "EMFILE": return OperationResultFactory.error("E_IO_TOO_MANY_OPEN");
        case "ENAMETOOLONG": return OperationResultFactory.error("E_IO_NAME_TOO_LONG");
        case "ENOTDIR": return OperationResultFactory.error("E_IO_NOT_DIR");
        case "EBADF": return OperationResultFactory.error("E_IO_BAD_DESCRIPTOR");
        default: return OperationResultFactory.error("E_IO_UNKNOWN", e.code)
      }
    }
  }
}
