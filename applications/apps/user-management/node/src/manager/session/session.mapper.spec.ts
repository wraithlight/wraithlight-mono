const dateISOSerializeSpy = jest.fn();

jest.mock("@wraithlight/framework.date", () => ({
  dateISOSerialize: dateISOSerializeSpy.mockImplementation((date: Date) => date.toISOString())
}));

import { SessionDbo } from "@wraithlight/common.user-management.dal";
import { ExternalSessionResponse } from "@wraithlight/core.user-management.types";

import { dboToDto } from "./session.mapper";


describe("SessionMapperSpecs", () => {

  const MOCK_DBO: SessionDbo = {
    id: "b296e0a6-01ec-4745-94da-d8d27b052cdf",
    userId: "b296e0a6-01ec-4745-94da-d8d27b052cdf",
    applicationId: "b296e0a6-01ec-4745-94da-d8d27b052cdf",
    token: "83e32574-f0a6-443e-86ef-2da92bba2d2e",
    refreshToken: "2281e890-2181-4f2b-bc69-12f8050b3aa1",
    tokenValidFromUtc: new Date("2025-03-01T00:00:00.000Z"),
    tokenValidUntilUtc: new Date("2025-03-01T00:15:00.000Z"),
    refreshTokenValidFromUtc: new Date("2025-03-01T00:00:00.000Z"),
    refreshTokenValidUntilUtc: new Date("2025-03-01T00:01:00.000Z"),
    createdAtUtc: new Date("2025-03-01T00:00:00.000Z"),
    createdByUserId: "b296e0a6-01ec-4745-94da-d8d27b052cdf",
    isDeleted: false
  };
  const DTO_RESPONSE: ExternalSessionResponse = {
    sessionToken: "83e32574-f0a6-443e-86ef-2da92bba2d2e",
    sessionValidUntilUTC: "2025-03-01T00:15:00.000Z",
    refreshToken: "2281e890-2181-4f2b-bc69-12f8050b3aa1",
    refreshTokenValidUntilUTC: "2025-03-01T00:01:00.000Z"
  };

  describe("given the utility is initialized", () => {
    describe("when i call it", () => {
      let result: ExternalSessionResponse;
      beforeAll(() => {
        result = dboToDto(MOCK_DBO);
      });
      it("should return the properly mapped object", () => {
        expect(result).toStrictEqual(DTO_RESPONSE);
      });
      it("should call the underlying lib to serialize the dates", () => {
        expect(dateISOSerializeSpy).toHaveBeenCalledTimes(2);
        expect(dateISOSerializeSpy).toHaveBeenNthCalledWith(1, MOCK_DBO.tokenValidUntilUtc);
        expect(dateISOSerializeSpy).toHaveBeenNthCalledWith(2, MOCK_DBO.refreshTokenValidUntilUtc);
      });
    });
  });
});
