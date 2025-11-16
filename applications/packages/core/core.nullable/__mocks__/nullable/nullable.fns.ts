export const isNil = jest
  .fn()
  // eslint-disable-next-line no-undefined, @wraithlight/wraithlight-eslint/no-null
  .mockImplementation((m) => m === undefined || m === null)
  ;

export const isEmptyString = jest
  .fn()
  .mockImplementation(m => m === "")
  ;