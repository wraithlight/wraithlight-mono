import { ProviderName } from "./push-sender.type";

export interface PushSenderResponse {
  providerId: string;
  providerName: ProviderName;
  providerSentToAtUtc: Date;
  providerRespondedAtUtc: Date;
  providerIsSuccess: boolean;
  providerMessage: string;
}
