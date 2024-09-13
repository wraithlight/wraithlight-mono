import { MemoizeDictionaryFactory } from "../dictionary";

export class MemoizeService {

  private readonly _dictionary = MemoizeDictionaryFactory.getDictionary();

  public reset(token: string): boolean {
    if (!this._dictionary.has(token)) {
      return false;
    }
    const dictionary = this._dictionary.get(token);
    dictionary.reset();
    return true;
  }

}
