import { Guid } from "@wraithlight/core.guid";
import { utcNow } from "@wraithlight/framework.date";
import { isNil } from "@wraithlight/framework.nullable";
import {
  AsyncOperationResult,
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";

import {
  CommunicationDbo,
  NotifierProxyDbContextFactory
} from "../../db-context";

import { ERROR_CODES } from "./communication.const";

export class NotificationQueueService {

  private readonly _context = NotifierProxyDbContextFactory
    .getInstance()
    .getDbContext()
  ;

  public async create(
    id: Guid,
    recipientIdentifier: string,
    content: string,
    additionalMessagePayload: string,
    receviedAtUtc: Date,
    lastUpdatedAtUtc: Date
  ): Promise<OperationResult<CommunicationDbo>> {
    const model: CommunicationDbo = {
      id: id,
      recipientIdentifier: recipientIdentifier,
      content: content,
      additionalMessagePayload: additionalMessagePayload,
      status: "NOTIFICATION_IN_QUEUE",
      receivedAtUtc: receviedAtUtc,
      lastUpdatedAtUtc: lastUpdatedAtUtc,
    };
    await this._context.Communication
      .insert(model)
      .run()
    ;
    return this.getByIdCore(id);
  }

  public async getById(
    id: Guid
  ): Promise<OperationResult<CommunicationDbo>> {
    return this.getByIdCore(id);
  }

  public async getByServiceId(
    id: Guid
  ): Promise<OperationResult<CommunicationDbo>> {
    return this.getByServiceIdCore(id);
  }

  public async updateServiceId(
    id: Guid,
    serviceId: Guid
  ): Promise<OperationResult<CommunicationDbo>> {
    return this.updateByServiceIdCore(
      id,
      {
        serviceId: serviceId
      }
    );
  }

  public async markAsSucceedByServiceId(
    id: Guid,
    sentAtUtc: Date
  ): Promise<OperationResult<CommunicationDbo>> {
    return this.updateByServiceIdCore(
      id,
      {
        status: "NOTIFICATION_SENT",
        sentAtUtc: sentAtUtc,
        lastUpdatedAtUtc: utcNow()
      }
    );
  }

  public async markAsFailByServiceId(
    id: Guid,
    errorMessage: string
  ): Promise<OperationResult<CommunicationDbo>> {
    return this.updateByServiceIdCore(
      id,
      {
        status: "NOTIFICATION_ERROR",
        errorMessage: errorMessage,
        lastUpdatedAtUtc: utcNow()
      }
    );
  }

  public async list(
    skip?: number,
    take?: number
  ): Promise<OperationResult<ReadonlyArray<CommunicationDbo>>> {
    let query = this._context.Communication
      .select()
    ;

    if (!isNil(take) && !isNil(skip)) {
      query = query.take(take).skip(skip);
    }

    const result = await query.toList();

    if (isNil(result)) {
      return OperationResultFactory.error(ERROR_CODES.LIST);
    }

    return OperationResultFactory.success(result);
  }

  private async updateByServiceIdCore(
    id: Guid,
    model: Partial<CommunicationDbo>
  ): Promise<OperationResult<CommunicationDbo>> {
    await this._context.Communication
      .update("serviceId", id, model)
      .run()
    ;

    return this.getByServiceIdCore(id);
  }

  private async getByIdCore(
    id: Guid
  ): Promise<OperationResult<CommunicationDbo>> {
    const result = await this._context.Communication
      .select()
      .where("id", id)
      .first()
    ;

    if (isNil(result)) {
      return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
    }

    return OperationResultFactory.success(result);
  }

  private async getByServiceIdCore(
    id: Guid
  ): Promise<OperationResult<CommunicationDbo>> {
    const result = await this._context.Communication
      .select()
      .where("serviceId", id)
      .first()
    ;

    if (isNil(result)) {
      return OperationResultFactory.error(ERROR_CODES.NOT_FOUND);
    }

    return OperationResultFactory.success(result);
  }

}
