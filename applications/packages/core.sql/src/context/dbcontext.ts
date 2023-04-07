import { Connection, createConnection } from "mysql2";

import { DbSet } from "./dbset";

export abstract class DbContext {

    public readonly Connection: Connection;

    constructor(
        host: string,
        port: number,
        username: string,
        password: string,
        database: string
    ) {
        this.Connection = createConnection({
            host,
            port,
            user: username,
            password,
            database
        });
    }

    [key: string]: DbSet<unknown> | Connection;

}
