import { NodemailerFacadeService } from "./nodemailer.service"

const sendMailSpy = jest.fn().mockImplementation(() => ({ messageId: "message-id" }));
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

  const MOCK_HOST = "host";
  const MOCK_PORT = 123;
  const MOCK_SECURE = false;
  const MOCK_USER = "user";
  const MOCK_PASS = "pass";
  const MOCK_FROM_ADDRESS = "from"
  const MOCK_TO_ADDRESS = "to"
  const MOCK_SUBJECT = "subject"
  const MOCK_TEXT = "text"
  const MOCK_HTML = "html"
  const MOCK_BCC = ["bcc"]
  const MOCK_CC = ["cc"]

  // const sendMailSpy = jest.spyOn(createTransport.prototype, "sendMail");
  let service: NodemailerFacadeService;

  describe("given the service is initialized", () => {

    service = new NodemailerFacadeService(
      MOCK_HOST,
      MOCK_PORT,
      MOCK_SECURE,
      MOCK_USER,
      MOCK_PASS
    );

    it("should create a transported with the given params", () => {
      const PARAMS = {
        host: MOCK_HOST,
        port: MOCK_PORT,
        secure: MOCK_SECURE,
        auth: {
          user: MOCK_USER,
          pass: MOCK_PASS
        }
      }
      expect(createTransport).toHaveBeenCalled();
      expect(createTransport).toHaveBeenCalledTimes(1);
      expect(createTransport).toHaveBeenCalledWith(PARAMS);
    });

    describe("when i call `sendMail`", () => {

      beforeEach(async () => {
        await service.sendMail(
          MOCK_FROM_ADDRESS,
          MOCK_TO_ADDRESS,
          MOCK_SUBJECT,
          MOCK_TEXT,
          MOCK_HTML,
          MOCK_BCC,
          MOCK_CC
        );
      });

      it("should call the underlying service with the given params", (done: jest.DoneCallback) => {
        const PARAMS = {
          to: MOCK_TO_ADDRESS,
          from: MOCK_FROM_ADDRESS,
          subject: MOCK_SUBJECT,
          text: MOCK_TEXT,
          html: MOCK_HTML,
          bcc: MOCK_BCC,
          cc: MOCK_CC
        };
        expect(sendMailSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalledTimes(1);
        expect(sendMailSpy).toHaveBeenCalledWith(PARAMS);
        done();
      });
    });
  })
})
