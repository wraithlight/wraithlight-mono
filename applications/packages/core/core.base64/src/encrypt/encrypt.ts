import { OperationResult, OperationResultFactory } from "@wraithlight/framework.operation-result";

export function toBase64String(
  value: string
): OperationResult<string> {
  try {
    // eslint-disable-next-line no-restricted-globals
    const result = btoa(value);
    return OperationResultFactory.success(result);
  } catch {
    return OperationResultFactory.error("E_B64_ENCRYPT");
  }
}
