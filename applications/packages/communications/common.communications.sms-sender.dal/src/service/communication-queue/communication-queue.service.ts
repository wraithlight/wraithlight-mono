import { Guid } from "@wraithlight/core.guid";
import { utcNow } from "@wraithlight/framework.date";
import { isNil } from "@wraithlight/framework.nullable";
import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";

import {
  CommunicationQueueDbo,
  SMSSenderDbContextFactory
} from "../../db-context";

import { ERROR_CODES } from "./communication-queue.const";

export class NotificationQueueService {

  private readonly _context = SMSSenderDbContextFactory
    .getInstance()
    .getDbContext()
  ;

  public async create(
    id: Guid,
    proxyId: Guid,
    content: string,
    recipientIdentifier: string,
    providerId: Guid,
    receviedAtUtc: Date,
    lastUpdatedAtUtc: Date
  ): Promise<OperationResult<CommunicationQueueDbo>> {
    const model: CommunicationQueueDbo = {
      id: id,
      proxyId: proxyId,
      content: content,
      recipientIdentifier: recipientIdentifier,
      providerId: providerId,
      status: "NOTIFICATION_IN_QUEUE",
      receviedAtUtc: receviedAtUtc,
      lastUpdatedAtUtc: lastUpdatedAtUtc
    };
    await this._context.CommunicationQueue
      .insert(model)
      .run()
    ;
    return this.getByIdCore(id);
  }

  public async getById(
    id: Guid
  ): Promise<OperationResult<CommunicationQueueDbo>> {
    return this.getByIdCore(id);
  }

  public async addProviderIdentifier(
    id: Guid,
    providerIdentifier: string
  ): Promise<OperationResult<CommunicationQueueDbo>> {
    return this.updateCore(
      id,
      {
        providerIdentifier: providerIdentifier
      }
    );
  }

  public async markAsSucceed(
    id: Guid,
    sentAtUtc: Date
  ): Promise<OperationResult<CommunicationQueueDbo>> {
    return this.updateCore(
      id,
      {
        status: "NOTIFICATION_SENT",
        sentAtUtc: sentAtUtc,
        lastUpdatedAtUtc: utcNow()
      }
    );
  }

  public async markAsFail(
    id: Guid,
    errorMessage: string
  ): Promise<OperationResult<CommunicationQueueDbo>> {
    return this.updateCore(
      id,
      {
        status: "NOTIFICATION_ERROR",
        errorMessage: errorMessage,
        lastUpdatedAtUtc: utcNow()
      }
    );
  }

  private async updateCore(
    id: Guid,
    model: Partial<CommunicationQueueDbo>
  ): Promise<OperationResult<CommunicationQueueDbo>> {
    await this._context.CommunicationQueue
      .update("id", id, model)
      .run()
    ;

    return this.getByIdCore(id);
  }

  private async getByIdCore(
    id: Guid
  ): Promise<OperationResult<CommunicationQueueDbo>> {
    const result = await this._context.CommunicationQueue
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
