import { Dictionary } from "@wraithlight/core/core.dictionary";

export class TokenDictionary extends Dictionary<ReadonlyArray<string>> {

  private static _instance = new TokenDictionary();

  private constructor() {
    super();
  }

  public static getInstance(): TokenDictionary {
    return this._instance;
  }

}
