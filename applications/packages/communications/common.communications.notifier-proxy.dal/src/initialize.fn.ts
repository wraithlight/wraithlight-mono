import { NotifierProxyDbContextFactory } from "./db-context/dbcontext.factory";

export function initializeDal(
  host: string,
  port: number,
  username: string,
  password: string,
  database: string,
  usePooling: boolean
): void {
  NotifierProxyDbContextFactory.initialize(
    host,
    port,
    username,
    password,
    database,
    usePooling
  );
}
