const facadeCtorSpy = jest.fn();
const sendMailSpy = jest.fn();

jest.mock("@wraithlight/facade.nodemailer", () => {
    return {
        NodemailerFacadeService: facadeCtorSpy.mockImplementation(() => {
            return {
                sendMail: sendMailSpy
            }
        })
    }
});

import { IMailSenderSendMailResult } from "@wraithlight/core.notifier.types";

import { MailerService } from "./mailer.service";
import { UNKNOWN_ERROR } from "@wraithlight/core.common-constants";

describe("MailerServiceSpecs", () => {

    let service: MailerService;
    const MOCK_HOST = "host";
    const MOCK_PORT = 123;
    const MOCK_IS_SECURE = false;
    const MOCK_USERNAME = "username";
    const MOCK_PASSWORD = "password";
    const MOCK_TO_ADDRESS = "to-address";
    const MOCK_FROM_ADDRESS = "from-address";
    const MOCK_SUBJECT = "subject";
    const MOCK_CONTENT = "content";
    const MOCK_IS_HTML = false;
    const MOCK_CC = ["cc-address-1", "cc-address-2"];
    const MOCK_BCC = ["bcc-address-1", "bcc-address-2"];

    describe("given the service", () => {

        service = new MailerService(
            MOCK_HOST,
            MOCK_PORT,
            MOCK_IS_SECURE,
            MOCK_USERNAME,
            MOCK_PASSWORD
        );

        describe("when i call `sendEmail()`", () => {
            afterEach(() => {
                jest.resetAllMocks();
            });
            describe("and it succeeds", () => {
                let result: IMailSenderSendMailResult
                beforeEach(async () => {
                    sendMailSpy.mockImplementation(() => Promise.resolve());
                    result = await service.sendEmail(
                        MOCK_TO_ADDRESS,
                        MOCK_FROM_ADDRESS,
                        MOCK_SUBJECT,
                        MOCK_CONTENT,
                        MOCK_IS_HTML,
                        MOCK_CC,
                        MOCK_BCC
                    );
                });
                it("should call the facade to send the email", () => {
                    expect(sendMailSpy).toHaveBeenCalled();
                    expect(sendMailSpy).toHaveBeenCalledTimes(1);
                    expect(sendMailSpy).toHaveBeenCalledWith(
                        MOCK_FROM_ADDRESS,
                        MOCK_TO_ADDRESS,
                        MOCK_SUBJECT,
                        undefined,
                        MOCK_CONTENT,
                        MOCK_BCC,
                        MOCK_CC
                    );
                });
                it("should return a success response", () => {
                    expect(result).toStrictEqual({ success: true, errors: [] })
                });
            });
            describe("and it doesnt succeed", () => {
                let result: IMailSenderSendMailResult
                beforeEach(async () => {
                    sendMailSpy.mockImplementation(() => Promise.reject());
                    result = await service.sendEmail(
                        MOCK_TO_ADDRESS,
                        MOCK_FROM_ADDRESS,
                        MOCK_SUBJECT,
                        MOCK_CONTENT,
                        MOCK_IS_HTML,
                        MOCK_CC,
                        MOCK_BCC
                    );
                });
                it("should call the facade to send the email", () => {
                    expect(sendMailSpy).toHaveBeenCalled();
                    expect(sendMailSpy).toHaveBeenCalledTimes(1);
                    expect(sendMailSpy).toHaveBeenCalledWith(
                        MOCK_FROM_ADDRESS,
                        MOCK_TO_ADDRESS,
                        MOCK_SUBJECT,
                        undefined,
                        MOCK_CONTENT,
                        MOCK_BCC,
                        MOCK_CC
                    );
                });
                it("should return a success response", () => {
                    expect(result).toStrictEqual({ success: false, errors: [UNKNOWN_ERROR] })
                });
            });
        });

    });
});
