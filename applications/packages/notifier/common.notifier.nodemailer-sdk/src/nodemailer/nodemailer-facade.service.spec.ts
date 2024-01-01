import { NodemailerService } from "./nodemailer-facade.service";

const sendMailSpy = jest.fn()
jest.mock("nodemailer", () => {
    return {
        createTransport: jest.fn().mockImplementation(() => {
            return {
                sendMail: sendMailSpy
            }
        })
    }
})

import { createTransport } from "nodemailer";

describe("NodemailerFacadeServiceSpecs", () => {

    const MOCK_HOST = "";
    const MOCK_PORT = 0;
    const MOCK_SECURE = false;
    const MOCK_USERNAME = "";
    const MOCK_PASSWORD = "";
    const MOCK_TOADDRESS = "";
    const MOCK_FROMADDRESS = "";
    const MOCK_SUBJECT = "";
    const MOCK_CONTENT = "";
    const MOCK_ISHTML = false;
    const MOCK_CC: ReadonlyArray<string> = [];
    const MOCK_BCC: ReadonlyArray<string> = [];

    let service: NodemailerService;

    describe("given the service is initialized", () => {
        beforeEach(() => {
            NodemailerService.createInstance(
                MOCK_HOST,
                MOCK_PORT,
                MOCK_SECURE,
                MOCK_USERNAME,
                MOCK_PASSWORD
            );
            service = NodemailerService.getInstance();
        })
        describe("when i call getInstance()", () => {
            it("should create a new transport object", () => {
                expect(createTransport).toHaveBeenCalled();
                expect(createTransport).toHaveBeenCalledTimes(1);
                expect(createTransport).toHaveBeenCalledWith({
                    host: MOCK_HOST,
                    port: MOCK_PORT,
                    secure: MOCK_SECURE,
                    auth: {
                        user: MOCK_USERNAME,
                        pass: MOCK_PASSWORD,
                    }
                });
            });
        });
        describe("when i call sendMail", () => {
            beforeEach(() => {
                service.sendEmail(
                    MOCK_TOADDRESS,
                    MOCK_FROMADDRESS,
                    MOCK_SUBJECT,
                    MOCK_CONTENT,
                    MOCK_ISHTML,
                    MOCK_CC,
                    MOCK_BCC
                );
            });
            it("should call the underlying provider", () => {
                expect(sendMailSpy).toHaveBeenCalled();
                expect(sendMailSpy).toHaveBeenCalledTimes(1);
                expect(sendMailSpy).toHaveBeenCalledWith({
                    from: MOCK_FROMADDRESS,
                    to: MOCK_TOADDRESS,
                    subject: MOCK_SUBJECT,
                    html: MOCK_ISHTML ? MOCK_CONTENT : undefined,
                    text: MOCK_ISHTML ? undefined : MOCK_CONTENT,
                    cc: MOCK_CC,
                    bcc: MOCK_BCC
                });
            })
        })
    })
})
