import { Connection, Pool, createConnection, createPool } from "mysql2";

import { DbSet } from "./dbset";

export abstract class DbContext {

    public readonly Connection: Connection | Pool;

    constructor(
        host: string,
        port: number,
        username: string,
        password: string,
        database: string,
        usePooling = false
    ) {
        if (usePooling) {
            this.Connection = createPool({
                host,
                port,
                user: username,
                password,
                database,
                waitForConnections: true,
                connectionLimit: 10,
                maxIdle: 10,
                idleTimeout: 60000,
                queueLimit: 0
            });
        } else {
            this.Connection = createConnection({
                host,
                port,
                user: username,
                password,
                database
            });
        }
    }

    [key: string]: DbSet<object> | Connection | Pool;

}
