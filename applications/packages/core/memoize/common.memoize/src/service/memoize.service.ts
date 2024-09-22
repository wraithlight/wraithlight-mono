import { MemoizeDictionaryFactory } from "../dictionary";

export class MemoizeService {

  private static readonly _instance = new MemoizeService();
  private readonly _dictionary = MemoizeDictionaryFactory.getDictionary();

  private constructor() {
  }

  public static getInstance(): MemoizeService {
    return this._instance;
  }

  public reset(token: string): boolean {
    if (!this._dictionary.has(token)) {
      return false;
    }
    const dictionary = this._dictionary.get(token);
    dictionary.reset();
    return true;
  }

}
