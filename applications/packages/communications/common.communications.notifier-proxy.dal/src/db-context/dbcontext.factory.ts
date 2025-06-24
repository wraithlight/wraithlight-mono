import { NotifierProxyDbContext } from "./notifier-proxy.dbcontext";

export class NotifierProxyDbContextFactory {

  private static _instance: NotifierProxyDbContextFactory;
  private readonly _dbContextInstance: NotifierProxyDbContext;

  private constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    usePolling: boolean
  ) {
    this._dbContextInstance = new NotifierProxyDbContext(
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
    this._instance = new NotifierProxyDbContextFactory(
      host,
      port,
      username,
      password,
      database,
      usePolling
    );
  }

  public static getInstance(): NotifierProxyDbContextFactory {
    return this._instance;
  }

  public getDbContext(): NotifierProxyDbContext {
    return this._dbContextInstance;
  }

}
