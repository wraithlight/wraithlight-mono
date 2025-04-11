import { IListResult } from "@wraithlight/domain.http.types";

import { isHttpListResult } from "./list-result.guard";

describe("ListResultSpecs", () => {
  const VALID_OBJECT: IListResult<string> = {
    items: [],
    visibleCount: 0,
    allCount: 0,
    skip: 0,
    take: 0
  };

  describe("given the utility is initalized", () => {
    describe("when i call it", () => {
      describe("and the object is valid IListResult", () => {
        let result: boolean;
        beforeEach(() => {
          result = isHttpListResult(VALID_OBJECT);
        });
        it("should return true", () => {
          expect(result).toBe(true);
        });
      });
    });
  });
});
