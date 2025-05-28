import { EmailSenderDbContext } from "./email-sender.dbcontext";

export class EmailSenderDbContextFactory {

  private static _instance: EmailSenderDbContextFactory;
  private readonly _dbContextInstance: EmailSenderDbContext;

  private constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    usePolling: boolean
  ) {
    this._dbContextInstance = new EmailSenderDbContext(
      host,
      port,
      username,
      password,
      database,
      usePolling
    );
  }

  public static initialize(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    usePolling: boolean
  ): void {
    this._instance = new EmailSenderDbContextFactory(
      host,
      port,
      username,
      password,
      database,
      usePolling
    );
  }

  public static getInstance(): EmailSenderDbContextFactory {
    return this._instance;
  }

  public getDbContext(): EmailSenderDbContext {
    return this._dbContextInstance;
  }

}
