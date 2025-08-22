import { getDocumentRef } from "@wraithlight/core.dom";
import { Nullable, isNil } from "@wraithlight/framework.nullable";
import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";

export abstract class CookieProvider {

  constructor(
    private readonly _cookieName: string
  ) { }

  public setCookie(value: string, expires?: Date): void {
    let expiresStr = "";
    if (expires) {
      expiresStr = `; expires=${expires.toUTCString()}`;
    }
    getDocumentRef().cookie = `${encodeURIComponent(this._cookieName)}=${encodeURIComponent(value)}${expiresStr}; path=/`;
  }

  public hasCookie(): boolean {
    return !isNil(this.hasCookieCore());
  }

  public getCookie(): Nullable<string> {
    return this.hasCookieCore();
  }

  public deleteCookie(): void {
    this.setCookie("", new Date(0));
  }

  private hasCookieCore(): Nullable<string> {
    const nameEQ = encodeURIComponent(this._cookieName) + "=";
    const cookies = getDocumentRef().cookie.split(";");
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(nameEQ)) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }
    return GLOBAL_UNDEFINED;
  }
}
