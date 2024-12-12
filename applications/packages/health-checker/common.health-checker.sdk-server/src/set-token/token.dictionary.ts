import { Dictionary } from "@wraithlight/core.dictionary";

export class TokenDictionary extends Dictionary<ReadonlyArray<string>> {

  private static readonly _instance = new TokenDictionary();

  private constructor() {
    super();
  }

  public static getInstance(): TokenDictionary {
    return this._instance;
  }

}
