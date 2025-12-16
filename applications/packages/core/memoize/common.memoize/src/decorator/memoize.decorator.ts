import { toBase64String } from "@wraithlight/core.base64";
import { Dictionary } from "@wraithlight/framework.dictionary";

import { MemoizeDictionaryFactory } from "../dictionary";

const memoizeDictionary = MemoizeDictionaryFactory.getDictionary();

// TODO: Use `core.decorator.types` instead.
export const MemoizeDecorator = (token: string): MethodDecorator => (
  _target: object,
  _propertyKey: string | symbol,
  descriptor: PropertyDescriptor
): void => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const originalMethod = descriptor.value;

  if (!memoizeDictionary.has(token)) {
    memoizeDictionary.set(token, new Dictionary<unknown>());
  }
  const tokenDictionary = memoizeDictionary.get(token);

  const lifted = (...args: Array<unknown>): unknown => {
    const argsHash = args.map(m => JSON.stringify(m)).join("");
    const argsB64 = toBase64String(argsHash);

    if (!argsB64.isSuccess) {
      return originalMethod(...args);
    }

    if (tokenDictionary.has(argsB64.payload)) {
      return tokenDictionary.get(argsB64.payload);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = originalMethod(...args);
    tokenDictionary.set(argsB64.payload, result);
    return tokenDictionary.get(argsB64.payload);
  };

  descriptor.value = lifted;

};
