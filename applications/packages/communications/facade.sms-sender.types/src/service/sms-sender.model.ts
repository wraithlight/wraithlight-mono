export interface SmsSenderResponse {
  providerIdentifier?: string;
  providerSentToAtUtc: Date;
  providerRespondedAtUtc: Date;
  providerIsSuccess: boolean;
  providerMessage: string;
}
