import { Primitive } from "./primitive.type";

export function isPrimitive(primitiveLike: any): primitiveLike is Primitive {
    const primitiveTypes = ["boolean", "string", "number"];
    return primitiveTypes.includes(typeof primitiveLike);
}
