import { hash } from "./_internal/create-hash";

export function SHA512(str: string): string {
  return hash(
    "sha512",
    str
  );
}
