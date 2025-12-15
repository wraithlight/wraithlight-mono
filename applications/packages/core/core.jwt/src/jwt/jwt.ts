import { Nullable, isNil } from "@wraithlight/framework.nullable";
import JwtEncrypt from "jwt-encrypt";

import { ALGORITHM } from "./jwt.const";
import { JWTDecryptResult } from "./jwt.model";

export class CoreJWT {

  public static encrypt<T extends object>(
    payload: T,
    iv: string,
    key: string,
    secret: string,
    expiryInMinutes: number
  ): string {
    return JwtEncrypt.sign(
      payload,
      secret,
      { iv, key, algorithm: ALGORITHM },
      { expiresIn: `${expiryInMinutes}min` }
    );
  }

  public static decrypt<T extends object>(
    token: string,
    iv: string,
    key: string,
  ): JWTDecryptResult<T> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result: Nullable<T> = JwtEncrypt.decode(
      token,
      {
        iv,
        key,
        algorithm: ALGORITHM
      }
    );
    if (isNil(result)) {
      return {
        success: false
      };
    }

    return {
      success: true,
      payload: result
    };
  }

}
