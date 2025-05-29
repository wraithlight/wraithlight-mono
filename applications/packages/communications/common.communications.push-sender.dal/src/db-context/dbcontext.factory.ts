import { PushSenderDbContext } from "./push-sender.dbcontext";

export class PushSenderDbContextFactory {

  private static _instance: PushSenderDbContextFactory;
  private readonly _dbContextInstance: PushSenderDbContext;

  private constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    usePolling: boolean
  ) {
    this._dbContextInstance = new PushSenderDbContext(
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
    this._instance = new PushSenderDbContextFactory(
      host,
      port,
      username,
      password,
      database,
      usePolling
    );
  }

  public static getInstance(): PushSenderDbContextFactory {
    return this._instance;
  }

  public getDbContext(): PushSenderDbContext {
    return this._dbContextInstance;
  }

}
