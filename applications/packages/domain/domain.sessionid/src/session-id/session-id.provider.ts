import { CookieProvider } from "@wraithlight/core.cookie";
import { CookieName } from "@wraithlight/domain.cookie.constants";

export class SessionIdProvider extends CookieProvider {

  constructor() {
    super(CookieName.SessionId);
  }

  public override setCookie(value: string): void {
    super.setCookie(value);
  }

}
