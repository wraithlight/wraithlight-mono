export interface EmailSenderResponse {
  providerIdentifier: string;
  providerSentToAtUtc: Date;
  providerRespondedAtUtc: Date;
  providerIsSuccess: boolean;
  providerMessage: string;
}
