export interface IMailSender {
  sendEmail(
    toAddress: string,
    fromAddress: string,
    subject: string,
    content: string,
    isHtml?: boolean,
    cc?: ReadonlyArray<string>,
    bcc?: ReadonlyArray<string>
  ): Promise<IMailSenderSendMailResult>
}

export interface IMailSenderSendMailResult {
  success: boolean;
  errors: ReadonlyArray<string>;
}
