# @wraithlight/framework.operation-result

**Exports**:
* `AsyncOperationResult`
* `OperationResult`
* `OperationResultBase`
* `isSuccessResult`
* `isErrorResult`
* `OperationResultFactory`

**Usage**:

```ts

import {
  OperationResultFactory,
  isSuccessResult,
  AsyncOperationResult,
  OperationResult
} from "@wraithlight/framework.operation-result";

async asyncExampleOne(): AsyncOperationResult<string> {
  return OperationResultFactory.success("m00");
}

async asyncExampleTwo(): Promise<OperationResult<string>> {
  return OperationResultFactory.error("f00");
}

syncExampleOne(): OperationResult<string> {
  return OperationResultFactory.success("b00");
}

const resultA1 = isSuccessResult(await asyncExampleOne());  // true;  (with typecasting)
const resultA2 = isSuccessResult(await asyncExampleTwo());  // false; (with typecasting)
const resultS1 = isSuccessResult(syncExampleOne());         // true;  (with typecasting)

```
