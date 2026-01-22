export interface SendMailRequestV1Model {
  address: string;
  subject: string;
  content: string;
  isHtml: boolean;
  webhookBaseApiUrl?: string
}
