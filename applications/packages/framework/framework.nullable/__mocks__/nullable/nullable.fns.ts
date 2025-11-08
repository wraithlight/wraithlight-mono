export const isNil = jest
    .fn()
    // eslint-disable-next-line no-undefined
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
