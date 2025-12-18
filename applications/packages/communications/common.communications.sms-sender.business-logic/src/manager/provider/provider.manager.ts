import { ProviderService } from "@wraithlight/common.communications.sms-sender.dal";
import { SSSProviderCreateResponseModel } from "@wraithlight/core.communications.sms-sender.types";
import { InternalServerError } from "@wraithlight/core.errors";
import { newGuid } from "@wraithlight/core.guid";
import { ISMSSenderConfig } from "@wraithlight/facade.sms-sender.types";

export class ProviderManager {

  private readonly _providerService: ProviderService;

  constructor() {
    this._providerService = new ProviderService();
  }

  public async addProvider<T extends ISMSSenderConfig>(
    label: string,
    config: T
  ): Promise<SSSProviderCreateResponseModel> {
    const id = newGuid();
    const createResult = await this._providerService.create(
      id,
      label,
      JSON.stringify(config),
      false
    );

    if (createResult.isErrorTC()) {
      throw new InternalServerError();
    }

    const result: SSSProviderCreateResponseModel = {
      id: id,
      label: createResult.payload.label,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      config: JSON.parse(createResult.payload.config)
    };
    return result;
  }

}
