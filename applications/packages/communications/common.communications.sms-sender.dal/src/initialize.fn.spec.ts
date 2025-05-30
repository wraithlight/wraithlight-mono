const initializeSpy = jest.fn();
jest.mock("./db-context/dbcontext.factory", () => {
  return {
    SMSSenderDbContextFactory: {
      initialize: initializeSpy
    }
  }
});

import { initializeDal } from "./initialize.fn";

describe("initializeFnSpecs", () => {
  const MOCK_HOST = "host";
  const MOCK_PORT = 6666;
  const MOCK_USERNAME = "username";
  const MOCK_PASSWORD = "password";
  const MOCK_DATABASE = "database";
  const MOCK_USEPOLLING = true;

  describe("given the utility is initliazed", () => {
    describe("when i call it", () => {
      beforeAll(() => {
        initializeDal(
          MOCK_HOST,
          MOCK_PORT,
          MOCK_USERNAME,
          MOCK_PASSWORD,
          MOCK_DATABASE,
          MOCK_USEPOLLING
        );
      });
      it("should initialize the factory", () => {
        expect(initializeSpy).toHaveBeenCalled();
        expect(initializeSpy).toHaveBeenCalledTimes(1);
        expect(initializeSpy).toHaveBeenCalledWith(
          MOCK_HOST,
          MOCK_PORT,
          MOCK_USERNAME,
          MOCK_PASSWORD,
          MOCK_DATABASE,
          MOCK_USEPOLLING
        );
      });
    });
  });
});
