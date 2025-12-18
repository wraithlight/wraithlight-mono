import { ProviderService } from "@wraithlight/common.communications.sms-sender.dal";
import { SSSPro } from "@wraithlight/core.communications.sms-sender.types";
import { InternalServerError } from "@wraithlight/core.errors";
import { Guid, newGuid } from "@wraithlight/core.guid";
import { DummySmsSenderFacadeService } from "@wraithlight/facade.sms-sender.client";
import {
  ISMSSenderConfig,
  ISmsSenderFacadeService
} from "@wraithlight/facade.sms-sender.types";
import { utcNow } from "@wraithlight/framework.date";
import { isEmptyStringOrNil } from "@wraithlight/framework.nullable";

export class ProviderManager {

  private readonly _providerService: ProviderService;

  constructor() {
    this._providerService = new ProviderService();
  }
nc addProvider(): Promise<SSSProvi

}
