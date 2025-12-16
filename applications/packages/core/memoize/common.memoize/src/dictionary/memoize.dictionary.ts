import { Dictionary } from "@wraithlight/framework.dictionary";

export class MemoizeDictionaryFactory {

  private static readonly _dictionary = new Dictionary<Dictionary<unknown>>();

  public static getDictionary(): Dictionary<Dictionary<unknown>> {
    return this._dictionary;
  }

}
