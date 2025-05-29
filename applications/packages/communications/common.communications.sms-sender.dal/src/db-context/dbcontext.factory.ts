import { SMSSenderDbContext } from "./sms-sender.dbcontext";

export class SMSSenderDbContextFactory {

  private static _instance: SMSSenderDbContextFactory;
  private readonly _dbContextInstance: SMSSenderDbContext;

  private constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    usePolling: boolean
  ) {
    this._dbContextInstance = new SMSSenderDbContext(
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
    this._instance = new SMSSenderDbContextFactory(
      host,
      port,
      username,
      password,
      database,
      usePolling
    );
  }

  public static getInstance(): SMSSenderDbContextFactory {
    return this._instance;
  }

  public getDbContext(): SMSSenderDbContext {
    return this._dbContextInstance;
  }

}
