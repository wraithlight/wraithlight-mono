import { Guid } from "@wraithlight/core.guid";
import { isNil } from "@wraithlight/framework.nullable";
import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";
import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";

import {
  ProviderDbo,
  PushSenderDbContextFactory
} from "../../db-context";

import { ERROR_CODES } from "./provider.const";

export class ProviderService {

  private readonly _context = PushSenderDbContextFactory
    .getInstance()
    .getDbContext()
    ;

  public async findById(
    id: Guid
  ): Promise<OperationResult<ProviderDbo>> {
    return this.getByIdCore(id);
  }

  public async findActive(): Promise<OperationResult<ProviderDbo>> {
    const result = await this._context.Providers
      .select()
      .where("isActive", true)
      .toList()
    ;

    if (result.length === 0) {
      return OperationResultFactory.error(ERROR_CODES.NO_ACTIVE);
    }

    if (result.length > 1) {
      return OperationResultFactory.error(ERROR_CODES.MULTIPLE_ACTIVE);
    }

    return OperationResultFactory.success(result[0]);
  }


  public async create(
    id: Guid,
    label: string,
    config: string,
    isActive: boolean
  ): Promise<OperationResult<ProviderDbo>> {
    const model: ProviderDbo = {
      id: id,
      label: label,
      config: config,
      isActive: isActive
    };
    await this._context.Providers
      .insert(model)
      .run()
      ;
    return this.getByIdCore(id);
  }

  public async update(
    id: Guid,
    label: string,
    config: string,
    isActive: boolean
  ): Promise<OperationResult<ProviderDbo>> {
    const model = {
      label: label,
      config: config,
      isActive: isActive
    };
    await this._context.Providers
      .update(
        "id",
        id,
        model
      )
      .run()
      ;
    return this.getByIdCore(id);
  }

  public async list(
  ): Promise<OperationResult<ReadonlyArray<ProviderDbo>>> {
    const result = await this._context.Providers
      .select()
      .toList()
      .catch(_ => GLOBAL_UNDEFINED)
      ;

    if (isNil(result)) {
      return OperationResultFactory.error(ERROR_CODES.LIST);
    }

    return OperationResultFactory.success(result);
  }

  private async getByIdCore(
    id: Guid
  ): Promise<OperationResult<ProviderDbo>> {
    const result = await this._context.Providers
      .select()
      .where("id", id)
      .first()
      ;

    if (isNil(result)) {
      return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
    }

    return OperationResultFactory.success(result);
  }

}
