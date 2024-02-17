import { ConfigurationReader } from "./config-reader";

class TestConfig {
    public propA = "b";
    public propB?: string;
}

class TestCommonConfig {
    public propA = "b";
    public propB?: string;
}

describe("ConfigurationReaderSpecs", () => {

    const MOCK_CONFIG = new TestConfig();
    const MOCK_COMMON_CONFIG = new TestCommonConfig();
    let reader: ConfigurationReader<TestConfig, TestCommonConfig>;

    describe("given the service is initialized", () => {

        reader = new ConfigurationReader(MOCK_CONFIG, MOCK_COMMON_CONFIG);

        describe("when i call `get()`", () => {
            it("should return the proper value", () => {
                expect(reader.get(m => m.propA)).toBe(MOCK_CONFIG.propA);
            });
        });

        describe("when i call `tryGet()`", () => {
            describe("on an existing property", () => {
                it("should return the proper value", () => {
                    expect(reader.tryGet(m => m.propA, "")).toBe(MOCK_CONFIG.propA);
                });
            });
            describe("on a non-existing property", () => {
                it("should return the default value", () => {
                    expect(reader.tryGet(m => m.propB, "AA")).toBe("AA");
                });
            });
        });

        describe("when i call `getCommon()`", () => {
            it("should return the proper value", () => {
                expect(reader.getCommon(m => m.propA)).toBe(MOCK_COMMON_CONFIG.propA);
            });
        });

        describe("when i call `tryGetCommon()`", () => {
            describe("on an existing property", () => {
                it("should return the proper value", () => {
                    expect(reader.tryGetCommon(m => m.propA, "")).toBe(MOCK_COMMON_CONFIG.propA);
                });
            });
            describe("on a non-existing property", () => {
                it("should return the default value", () => {
                    expect(reader.tryGetCommon(m => m.propB, "AA")).toBe("AA");
                });
            });
        });
    });
});
