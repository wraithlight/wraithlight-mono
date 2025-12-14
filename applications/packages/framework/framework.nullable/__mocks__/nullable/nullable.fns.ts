export const isNil = jest
  .fn()
  // eslint-disable-next-line no-undefined, @wraithlight/wraithlight-eslint/no-null
  .mockImplementation((m) => m === undefined || m === null)
  ;

export const isEmptyString = jest
  .fn()
  .mockImplementation(m => m === "")
  ;

export const isNan = jest
  .fn()
  .mockImplementation(Number.isNaN)
  ;

export const isEmptyStringOrNil = jest
  .fn()
  // eslint-disable-next-line no-undefined, @wraithlight/wraithlight-eslint/no-null
  .mockImplementation(m => m === "" || m === undefined || m === null)
  ;