jest.mock("mysql2", () => {
    return {
        createConnection: jest.fn(),
        createPool: jest.fn()
    }
});

import { Nullable } from "@wraithlight/core.nullable";

import { DbContext } from "./dbcontext";
import { createConnection, createPool } from "mysql2";

class TestDbContext extends DbContext { }

describe("DbContextSpecs", () => {

    const MOCK_HOST = "http://wraithlight.ai";
    const MOCK_PORT = 3306;
    const MOCK_USER = "wraithlight-root";
    const MOCK_PASS = "r00t";
    const MOCK_DB__ = "wraithlight-db";

    let context: Nullable<DbContext>;

    describe("given the context is initialized", () => {

        afterEach(() => {
            context = undefined;
        });

        describe("when it is configured to use pooling", () => {
            context = new TestDbContext(MOCK_HOST, MOCK_PORT, MOCK_USER, MOCK_PASS, MOCK_DB__, false);

            it("should use `createConnection` to create the connection", () => {
                expect(createConnection).toHaveBeenCalled();
                expect(createConnection).toHaveBeenCalledTimes(1);
                expect(createConnection).toHaveBeenCalledWith({
                    host: MOCK_HOST,
                    port: MOCK_PORT,
                    user: MOCK_USER,
                    password: MOCK_PASS,
                    database: MOCK_DB__
                });
            });

        });

        describe("when it is configured to not use pooling", () => {
            context = new TestDbContext(MOCK_HOST, MOCK_PORT, MOCK_USER, MOCK_PASS, MOCK_DB__, true);

            it("should use `createPool` to create the connection", () => {
                expect(createPool).toHaveBeenCalled();
                expect(createPool).toHaveBeenCalledTimes(1);
                expect(createPool).toHaveBeenCalledWith({
                    host: MOCK_HOST,
                    port: MOCK_PORT,
                    user: MOCK_USER,
                    password: MOCK_PASS,
                    database: MOCK_DB__,
                    waitForConnections: true,
                    connectionLimit: 10,
                    maxIdle: 10,
                    idleTimeout: 60000,
                    queueLimit: 0
                });
            });

        });

    });

});
