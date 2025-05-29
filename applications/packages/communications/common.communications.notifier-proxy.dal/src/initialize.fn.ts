import { EmailSenderDbContextFactory } from "./db-context/dbcontext.factory";

export function initializeDal(
  host: string,
  port: number,
  username: string,
  password: string,
  database: string,
  usePooling: boolean
): void {
  EmailSenderDbContextFactory.initialize(
    host,
    port,
    username,
    password,
    database,
    usePooling
  );
}
