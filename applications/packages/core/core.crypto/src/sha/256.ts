import { hash } from "./_internal/create-hash";

export function SHA256(str: string): string {
  return hash(
    "sha256",
    str
  );
}
