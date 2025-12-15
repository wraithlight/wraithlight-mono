export interface JWTDecryptResult<T> {
  success: boolean;
  payload?: T
}
