import { CookieName } from "@wraithlight/domain.cookie.constants";

const cookieProviderCtorSpy = jest.fn();

jest.mock("@wraithlight/core.cookie", () => {
  return {
    CookieProvider: cookieProviderCtorSpy
  }
});

import { SessionIdProvider } from "./session-id.provider";

describe("SessionIdProviderSpecs", () => {
  let provider: SessionIdProvider;
  describe("given the provider is initialized", () => {
    beforeAll(() => {
      provider = new SessionIdProvider();
    });
    it("should create an instance of CookieProvider", () => {
      expect(cookieProviderCtorSpy).toHaveBeenCalled();
      expect(cookieProviderCtorSpy).toHaveBeenCalledTimes(1);
      expect(cookieProviderCtorSpy).toHaveBeenCalledWith(CookieName.SessionId);
    });
  });
});
