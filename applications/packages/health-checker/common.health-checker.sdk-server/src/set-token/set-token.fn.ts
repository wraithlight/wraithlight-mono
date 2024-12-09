import { HC_HEALTH_TOKENS_KEY, HC_METRICS_TOKENS_KEY } from "./token.const";
import { TokenDictionary } from "./token.dictionary"

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