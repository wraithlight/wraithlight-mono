import { SendMailRequestV1Model } from "@wraithlight/notifier/core.notifier.types";

interface SendEmailModelV1 extends SendMailRequestV1Model { }

export interface WebhookableSendEmailModelV1 extends SendEmailModelV1 {
    webhookBaseApiUrl?: string;
}
