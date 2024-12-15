import { Dictionary } from "@wraithlight/core.dictionary";

export class AppInfoDictionary extends Dictionary<string> {

  private static readonly _instance = new AppInfoDictionary();

  private constructor() {
    super();
  }

  public static getInstance(): AppInfoDictionary {
    return this._instance;
  }

}
