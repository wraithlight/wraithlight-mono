import { isNil } from "@wraithlight/core.nullable";
import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";

import { ApplicationDbo, UserManagementDbContextFactory } from "../../db-context";

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
      return OperationResultFactory.error("E_LIST_ALL_APPLICATIONS");
    }

    return OperationResultFactory.success(result);
  }

}
