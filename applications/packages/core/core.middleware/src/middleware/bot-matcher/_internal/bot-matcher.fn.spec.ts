import { isBot } from "./bot-matcher.fn";

describe("isBotSpecs", () => {
    const MOCK_CRAWLERS: Array<string> = [
        "facebookexternalhit/1.1",
        "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)"
    ];
    const MOCK_NON_CRAWLERS: Array<string> = [
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
    ];

    describe("given the utility is initialized", () => {
        describe("when i call it", () => {
            describe("and the user agent is a crawler", () => {
                it.each([
                    ...MOCK_CRAWLERS
                ])("should return true", (userAgent: string) => {
                    expect(isBot(userAgent)).toBe(true);
                });
            });
            describe("and the user agent is not a crawler", () => {
                it.each([
                    ...MOCK_NON_CRAWLERS
                ])("should return false", (userAgent: string) => {
                    expect(isBot(userAgent)).toBe(false);
                });
            });
        });
    });
});
