const sendMailSpy = jest.fn().mockImplementation(() => "message-id")
jest.mock("@wraithlight/facade.nodemailer", () => {
    return {
        NodemailerFacadeService: jest
            .fn()
            .mockImplementation(() => {
                return {
                    sendMail: sendMailSpy
                }
            })
    }
});

import { NodemailerFacadeService } from "@wraithlight/facade.nodemailer";

import { MailerService } from "./mailer.service";

describe("MailerServiceSpecs", () => {

    const MOCK_HOST = "host";
    const MOCK_PORT = 1234;
    const MOCK_SECURE = false;
    const MOCK_USERNAME = "username";
    const MOCK_PASSWORD = "password";
    const MOCK_FROM = "no-reply@wraithlight.ai";
    const MOCK_TO = "customer@wraithlight.ai";
    const MOCK_SUBJECT = "subject";
    const MOCK_HTML = "content";

    let service: MailerService;

    describe("given the service is initialized", () => {

        service = new MailerService(
            MOCK_HOST,
            MOCK_PORT,
            MOCK_SECURE,
            MOCK_USERNAME,
            MOCK_PASSWORD,
            MOCK_FROM
        );

        it("should create a facade instance", () => {
            expect(NodemailerFacadeService).toHaveBeenCalled();
            expect(NodemailerFacadeService).toHaveBeenCalledTimes(1);
            expect(NodemailerFacadeService).toHaveBeenCalledWith(
                MOCK_HOST,
                MOCK_PORT,
                MOCK_SECURE,
                MOCK_USERNAME,
                MOCK_PASSWORD
            );
        });

        describe("when i call `sendEmail`", () => {
            let result: string;
            beforeAll(async () => {
                result = await service.sendEmail(
                    MOCK_TO,
                    MOCK_SUBJECT,
                    MOCK_HTML
                );
            });
            it("should call the underyling facade SDK", () => {
                expect(sendMailSpy).toHaveBeenCalled();
                expect(sendMailSpy).toHaveBeenCalledTimes(1);
                expect(sendMailSpy).toHaveBeenCalledWith(
                    MOCK_FROM,
                    MOCK_TO,
                    MOCK_SUBJECT,
                    undefined,
                    MOCK_HTML,
                    [],
                    []
                );
            });
            it("should return a string", () => {
                expect(typeof result).toBe("string");
            });
            it("should return the message id", () => {
                expect(result).toBe("message-id");
            });
        });
    });
});
