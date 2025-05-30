import { SMSSenderDbContextFactory } from "./db-context/dbcontext.factory";

export function initializeDal(
  host: string,
  port: number,
  username: string,
  password: string,
  database: string,
  usePooling: boolean
): void {
  SMSSenderDbContextFactory.initialize(
    host,
    port,
    username,
    password,
    database,
    usePooling
  );
}
