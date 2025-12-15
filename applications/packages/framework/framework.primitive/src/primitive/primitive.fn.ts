import { Primitive } from "./primitive.type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isPrimitive(primitiveLike: any): primitiveLike is Primitive {
  const primitiveTypes = ["boolean", "string", "number"];
  return primitiveTypes.includes(typeof primitiveLike);
}
