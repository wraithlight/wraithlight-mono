import {
  OperationResult,
  OperationResultFactory
} from "@wraithlight/framework.operation-result";

export function fromBase64String(
  value: string
): OperationResult<string> {
  try {
    // eslint-disable-next-line no-restricted-globals
    const result = atob(value);
    return OperationResultFactory.success(result);
  } catch {
    return OperationResultFactory.error("E_B64_DECRYPT");
  }
}
