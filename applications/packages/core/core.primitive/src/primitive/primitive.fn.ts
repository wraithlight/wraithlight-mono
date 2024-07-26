import { Primitive } from "./primitive.type";

/**
 * @deprecated Use the same utility from `framework.primitive` instead.
 */
export function isPrimitive(primitiveLike: any): primitiveLike is Primitive {
    const primitiveTypes = ["boolean", "string", "number"];
    return primitiveTypes.includes(typeof primitiveLike);
}
