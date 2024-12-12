import { HC_APPNAME_KEY, HC_APPVERSION_KEY } from "./appinfo.const";
import { AppInfoDictionary } from "./appinfo.dictionary";
import { HC_HEALTH_TOKENS_KEY, HC_METRICS_TOKENS_KEY } from "./token.const";
import { TokenDictionary } from "./token.dictionary";

export function setHcHealthTokens(
  tokens: ReadonlyArray<string>
): void {
  const dictionary = TokenDictionary.getInstance();
  dictionary.set(HC_HEALTH_TOKENS_KEY, tokens);
}

export function setHcMetricsTokens(
  tokens: ReadonlyArray<string>
): void {
  const dictionary = TokenDictionary.getInstance();
  dictionary.set(HC_METRICS_TOKENS_KEY, tokens);
}

export function setAppinfo(
  appName: string,
  appVersion: string
): void {
  const dictionary = AppInfoDictionary.getInstance();
  dictionary.set(HC_APPNAME_KEY, appName);
  dictionary.set(HC_APPVERSION_KEY, appVersion);
}