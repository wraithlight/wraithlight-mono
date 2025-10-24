import { isNil } from "@wraithlight/framework.nullable";
import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";

import {
  ApplicationDbo,
  UserManagementDbContextFactory
} from "../../db-context";

import { ERROR_CODES } from "./application.const";

export class ApplicationService {

  private readonly _context = UserManagementDbContextFactory
    .getInstance()
    .getDbContext()
    ;

  public async listAllApplication(
  ): Promise<OperationResult<ReadonlyArray<ApplicationDbo>>> {
    const result = await this._context.Applications
      .select()
      .toList()
      ;

    if (isNil(result)) {
      return OperationResultFactory.error(ERROR_CODES.LIST);
    }

    return OperationResultFactory.success(result);
  }

}
