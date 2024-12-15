import { OperationResult } from "@wraithlight/framework.operation-result";

import {
  ERROR_IO_ACCESS,
  ERROR_IO_BAD_DESCRIPTOR,
  ERROR_IO_IS_DIR,
  ERROR_IO_NAME_TOO_LONG,
  ERROR_IO_NOT_DIR,
  ERROR_IO_NOT_EXIST,
  ERROR_IO_PERMISSION,
  ERROR_IO_TOO_MANY_OPEN,
  ERROR_IO_UNKNOWN,
  E_NO_CODE,
  NATIVE_EACCES,
  NATIVE_EBADF,
  NATIVE_EISDIR,
  NATIVE_EMFILE,
  NATIVE_ENAMETOOLONG,
  NATIVE_ENOENT,
  NATIVE_ENOTDIR,
  NATIVE_EPERM
} from "./file-operator.const";

const readFileSyncSpy = jest.fn();

jest.mock("fs", () => {
  return {
    readFileSync: readFileSyncSpy
  }
});

import { FileOperator } from "./file-operator";

describe("FileOperatorSpecs", () => {

  const MOCK_PATH = "my/mock/path";

  describe("given the utility is initialized", () => {
    describe("when i call `readFileText()`", () => {
      describe("and the file exists", () => {
        let result: OperationResult<string>;
        const MOCK_RESULT = "im a string";
        beforeAll(() => {
          readFileSyncSpy.mockClear();
          readFileSyncSpy.mockReturnValue(MOCK_RESULT)
          result = FileOperator.readFileText(MOCK_PATH);
        });
        it("should call `readFileSync`", () => {
          expect(readFileSyncSpy).toHaveBeenCalled();
          expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
          expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
        });
        it("should be a success result", () => {
          expect(result.isError).toBe(false);
          expect(result.isSuccess).toBe(true);
        });
        it("should return the content of the file", () => {
          expect(result.isSuccess && result.payload).toBe(MOCK_RESULT);
        });
      });
      describe("and the file doesnt exist", () => {
        let result: OperationResult<string>;
        beforeAll(() => {
          readFileSyncSpy.mockClear();
          readFileSyncSpy.mockImplementation(() => { throw { code: NATIVE_ENOENT } })
          result = FileOperator.readFileText(MOCK_PATH);
        });
        it("should call `readFileSync`", () => {
          expect(readFileSyncSpy).toHaveBeenCalled();
          expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
          expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
        });
        it("should be a success result", () => {
          expect(result.isError).toBe(true);
          expect(result.isSuccess).toBe(false);
        });
        it("should return the content of the file", () => {
          expect(result.isError && result.errors).toHaveLength(1);
          expect(result.isError && result.errors).toContain(ERROR_IO_NOT_EXIST);
        });
      });
      describe("and no access", () => {
        let result: OperationResult<string>;
        beforeAll(() => {
          readFileSyncSpy.mockClear();
          readFileSyncSpy.mockImplementation(() => { throw { code: NATIVE_EACCES } })
          result = FileOperator.readFileText(MOCK_PATH);
        });
        it("should call `readFileSync`", () => {
          expect(readFileSyncSpy).toHaveBeenCalled();
          expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
          expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
        });
        it("should be a success result", () => {
          expect(result.isError).toBe(true);
          expect(result.isSuccess).toBe(false);
        });
        it("should return the content of the file", () => {
          expect(result.isError && result.errors).toHaveLength(1);
          expect(result.isError && result.errors).toContain(ERROR_IO_ACCESS);
        });
      });
      describe("and no permission", () => {
        let result: OperationResult<string>;
        beforeAll(() => {
          readFileSyncSpy.mockClear();
          readFileSyncSpy.mockImplementation(() => { throw { code: NATIVE_EPERM } })
          result = FileOperator.readFileText(MOCK_PATH);
        });
        it("should call `readFileSync`", () => {
          expect(readFileSyncSpy).toHaveBeenCalled();
          expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
          expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
        });
        it("should be a success result", () => {
          expect(result.isError).toBe(true);
          expect(result.isSuccess).toBe(false);
        });
        it("should return the content of the file", () => {
          expect(result.isError && result.errors).toHaveLength(1);
          expect(result.isError && result.errors).toContain(ERROR_IO_PERMISSION);
        });
      });
      describe("and file is directory", () => {
        let result: OperationResult<string>;
        beforeAll(() => {
          readFileSyncSpy.mockClear();
          readFileSyncSpy.mockImplementation(() => { throw { code: NATIVE_EISDIR } })
          result = FileOperator.readFileText(MOCK_PATH);
        });
        it("should call `readFileSync`", () => {
          expect(readFileSyncSpy).toHaveBeenCalled();
          expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
          expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
        });
        it("should be a success result", () => {
          expect(result.isError).toBe(true);
          expect(result.isSuccess).toBe(false);
        });
        it("should return the content of the file", () => {
          expect(result.isError && result.errors).toHaveLength(1);
          expect(result.isError && result.errors).toContain(ERROR_IO_IS_DIR);
        });
      });
      describe("and too many files open", () => {
        let result: OperationResult<string>;
        beforeAll(() => {
          readFileSyncSpy.mockClear();
          readFileSyncSpy.mockImplementation(() => { throw { code: NATIVE_EMFILE } })
          result = FileOperator.readFileText(MOCK_PATH);
        });
        it("should call `readFileSync`", () => {
          expect(readFileSyncSpy).toHaveBeenCalled();
          expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
          expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
        });
        it("should be a success result", () => {
          expect(result.isError).toBe(true);
          expect(result.isSuccess).toBe(false);
        });
        it("should return the content of the file", () => {
          expect(result.isError && result.errors).toHaveLength(1);
          expect(result.isError && result.errors).toContain(ERROR_IO_TOO_MANY_OPEN);
        });
      });
      describe("and the filename is too long", () => {
        let result: OperationResult<string>;
        beforeAll(() => {
          readFileSyncSpy.mockClear();
          readFileSyncSpy.mockImplementation(() => { throw { code: NATIVE_ENAMETOOLONG } })
          result = FileOperator.readFileText(MOCK_PATH);
        });
        it("should call `readFileSync`", () => {
          expect(readFileSyncSpy).toHaveBeenCalled();
          expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
          expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
        });
        it("should be a success result", () => {
          expect(result.isError).toBe(true);
          expect(result.isSuccess).toBe(false);
        });
        it("should return the content of the file", () => {
          expect(result.isError && result.errors).toHaveLength(1);
          expect(result.isError && result.errors).toContain(ERROR_IO_NAME_TOO_LONG);
        });
      });
      describe("and it is not directory", () => {
        let result: OperationResult<string>;
        beforeAll(() => {
          readFileSyncSpy.mockClear();
          readFileSyncSpy.mockImplementation(() => { throw { code: NATIVE_ENOTDIR } })
          result = FileOperator.readFileText(MOCK_PATH);
        });
        it("should call `readFileSync`", () => {
          expect(readFileSyncSpy).toHaveBeenCalled();
          expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
          expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
        });
        it("should be a success result", () => {
          expect(result.isError).toBe(true);
          expect(result.isSuccess).toBe(false);
        });
        it("should return the content of the file", () => {
          expect(result.isError && result.errors).toHaveLength(1);
          expect(result.isError && result.errors).toContain(ERROR_IO_NOT_DIR);
        });
      });
      describe("and bad descriptor", () => {
        let result: OperationResult<string>;
        beforeAll(() => {
          readFileSyncSpy.mockClear();
          readFileSyncSpy.mockImplementation(() => { throw { code: NATIVE_EBADF } })
          result = FileOperator.readFileText(MOCK_PATH);
        });
        it("should call `readFileSync`", () => {
          expect(readFileSyncSpy).toHaveBeenCalled();
          expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
          expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
        });
        it("should be a success result", () => {
          expect(result.isError).toBe(true);
          expect(result.isSuccess).toBe(false);
        });
        it("should return the content of the file", () => {
          expect(result.isError && result.errors).toHaveLength(1);
          expect(result.isError && result.errors).toContain(ERROR_IO_BAD_DESCRIPTOR);
        });
      });
      describe("and unknown error happens", () => {
        describe("with code", () => {
          let result: OperationResult<string>;
          const MOCK_CODE = "mock-code";
          beforeAll(() => {
            readFileSyncSpy.mockClear();
            readFileSyncSpy.mockImplementation(() => { throw { code: MOCK_CODE } })
            result = FileOperator.readFileText(MOCK_PATH);
          });
          it("should call `readFileSync`", () => {
            expect(readFileSyncSpy).toHaveBeenCalled();
            expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
            expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
          });
          it("should be a success result", () => {
            expect(result.isError).toBe(true);
            expect(result.isSuccess).toBe(false);
          });
          it("should return the content of the file", () => {
            expect(result.isError && result.errors).toHaveLength(2);
            expect(result.isError && result.errors).toEqual([ERROR_IO_UNKNOWN, MOCK_CODE]);
          });
        });
        describe("without code", () => {
          describe("because the code is nil (undefined)", () => {
            let result: OperationResult<string>;
            beforeAll(() => {
              readFileSyncSpy.mockClear();
              readFileSyncSpy.mockImplementation(() => { throw { code: undefined } })
              result = FileOperator.readFileText(MOCK_PATH);
            });
            it("should call `readFileSync`", () => {
              expect(readFileSyncSpy).toHaveBeenCalled();
              expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
              expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
            });
            it("should be a success result", () => {
              expect(result.isError).toBe(true);
              expect(result.isSuccess).toBe(false);
            });
            it("should return the content of the file", () => {
              expect(result.isError && result.errors).toHaveLength(2);
              expect(result.isError && result.errors).toEqual([ERROR_IO_UNKNOWN, E_NO_CODE]);
            });
          });
          describe("because the code is nil (null)", () => {
            let result: OperationResult<string>;
            beforeAll(() => {
              readFileSyncSpy.mockClear();
              readFileSyncSpy.mockImplementation(() => { throw { code: null } })
              result = FileOperator.readFileText(MOCK_PATH);
            });
            it("should call `readFileSync`", () => {
              expect(readFileSyncSpy).toHaveBeenCalled();
              expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
              expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
            });
            it("should be a success result", () => {
              expect(result.isError).toBe(true);
              expect(result.isSuccess).toBe(false);
            });
            it("should return the content of the file", () => {
              expect(result.isError && result.errors).toHaveLength(2);
              expect(result.isError && result.errors).toEqual([ERROR_IO_UNKNOWN, E_NO_CODE]);
            });
          });
          describe("because the code is empty string", () => {
            let result: OperationResult<string>;
            beforeAll(() => {
              readFileSyncSpy.mockClear();
              readFileSyncSpy.mockImplementation(() => { throw { code: "" } })
              result = FileOperator.readFileText(MOCK_PATH);
            });
            it("should call `readFileSync`", () => {
              expect(readFileSyncSpy).toHaveBeenCalled();
              expect(readFileSyncSpy).toHaveBeenCalledTimes(1);
              expect(readFileSyncSpy).toHaveBeenCalledWith(MOCK_PATH);
            });
            it("should be a success result", () => {
              expect(result.isError).toBe(true);
              expect(result.isSuccess).toBe(false);
            });
            it("should return the content of the file", () => {
              expect(result.isError && result.errors).toHaveLength(2);
              expect(result.isError && result.errors).toEqual([ERROR_IO_UNKNOWN, E_NO_CODE]);
            });
          });
        });
      });
    });
  });
});
