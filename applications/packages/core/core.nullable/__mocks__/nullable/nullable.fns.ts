export const isNil = jest
    .fn()
    .mockImplementation((m) => m === undefined || m === null)
;
