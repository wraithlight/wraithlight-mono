import { Store } from "@wraithlight/core.redux";
import { GLOBAL_UNDEFINED } from "@wraithlight/kernel.undefined";

const getDocumentRefSpy = jest.fn();
const initializeAuthSdkSpy = jest.fn();

jest.mock(
  "@wraithlight/core.dom",
  () => {
    return {
      getDocumentRef: getDocumentRefSpy
        .mockImplementation(() => ({ body: GLOBAL_UNDEFINED }))
    };
  }
);
jest.mock(
  "@wraithlight/common.auth-sdk.client",
  () => {
    return {
      initializeAuthSdk: initializeAuthSdkSpy
    };
  }
);
jest.mock(
  "@wraithlight/core.redux",
  () => {
    return {
      Store: {
        initialize: jest.fn(),
        getInstance: jest.fn()
      }
    };
  }
);
jest.mock(
  "./app",
  () => jest.fn().mockImplementation(() => ({}))
);
jest.mock(
  "./app.css",
  () => jest.fn()
);
jest.mock("./sdk");

import App from "./app";
import { INITIAL_STATE } from "./sdk";

describe(
  "mainSpecs",
  () => {
    describe(
      "given the file is imported",
      () => {
        beforeAll(() => {
          require("./main");
        });
        it(
          "should initialize the store",
          () => {
            const initializeSpy = jest.spyOn(
              Store,
              "initialize"
            );
            expect(initializeSpy).toHaveBeenCalled();
            expect(initializeSpy).toHaveBeenCalledTimes(1);
            expect(initializeSpy).toHaveBeenCalledWith(INITIAL_STATE);
          }
        );
        it(
          "should read the store instance",
          () => {
            const getInstanceSpy = jest.spyOn(
              Store,
              "getInstance"
            );
            expect(getInstanceSpy).toHaveBeenCalled();
            expect(getInstanceSpy).toHaveBeenCalledTimes(1);
            expect(getInstanceSpy).toHaveBeenCalledWith();
          }
        );
        it(
          "should initialize the auth sdk",
          () => {
            expect(initializeAuthSdkSpy).toHaveBeenCalled();
            expect(initializeAuthSdkSpy).toHaveBeenCalledTimes(1);
          }
        );
        describe(
          "when it bootstraps the app",
          () => {
            it(
              "should create a new app instance",
              () => {
                expect(App).toHaveBeenCalled();
                expect(App).toHaveBeenCalledTimes(1);
              }
            );
            it(
              "should read the document ref",
              () => {
                expect(getDocumentRefSpy).toHaveBeenCalled();
                expect(getDocumentRefSpy).toHaveBeenCalledTimes(1);
              }
            );
          }
        );
      }
    );
  }
);
