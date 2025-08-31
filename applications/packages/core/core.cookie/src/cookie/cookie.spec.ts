import { CookieProvider } from './cookie';

describe('CookieProvider', () => {
  const COOKIE_NAME = 'testCookie';
  let provider: CookieProvider;

  // Concrete subclass for testing
  class TestCookieProvider extends CookieProvider {}

  beforeEach(() => {
    provider = new TestCookieProvider(COOKIE_NAME);

    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: '',
    });
  });

  describe('setCookie', () => {
    it('should set a cookie without expiration', () => {
      provider.setCookie('value123');
      expect(document.cookie).toBe(`${encodeURIComponent(COOKIE_NAME)}=${encodeURIComponent('value123')}; path=/`);
    });

    it('should set a cookie with expiration', () => {
      const expires = new Date('2025-12-31T23:59:59Z');
      provider.setCookie('value123', expires);
      expect(document.cookie).toBe(
        `${encodeURIComponent(COOKIE_NAME)}=${encodeURIComponent('value123')}; expires=${expires.toUTCString()}; path=/`
      );
    });
  });

  describe('hasCookieCore / hasCookie / getCookie', () => {
    it('should return false if cookie does not exist', () => {
      expect(provider.hasCookie()).toBe(false);
      expect(provider.getCookie()).toBeUndefined();
    });

    it('should detect existing cookie', () => {
      document.cookie = `${encodeURIComponent(COOKIE_NAME)}=abc`;
      expect(provider.hasCookie()).toBe(true);
      expect(provider.getCookie()).toBe('abc');
    });

    it('should ignore other cookies', () => {
      document.cookie = `other=xyz; ${encodeURIComponent(COOKIE_NAME)}=abc`;
      expect(provider.hasCookie()).toBe(true);
      expect(provider.getCookie()).toBe('abc');
    });

    it('should return undefined if cookie name partially matches', () => {
      document.cookie = `${encodeURIComponent(COOKIE_NAME)}Extra=abc`;
      expect(provider.hasCookie()).toBe(false);
      expect(provider.getCookie()).toBeUndefined();
    });
  });

  describe('deleteCookie', () => {
    it('should delete the cookie', () => {
      const spySetCookie = jest.spyOn(provider, 'setCookie');
      provider.deleteCookie();
      expect(spySetCookie).toHaveBeenCalledWith('', new Date(0));
    });
  });
});
