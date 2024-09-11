export const isNil = jest
    .fn()
    .mockImplementation((m) => m === undefined || m === null)
;

export const isEmptyString = jest
  .fn()
  .mockImplementation(m => m === "")
;