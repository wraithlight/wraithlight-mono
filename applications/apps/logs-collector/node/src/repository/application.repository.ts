import { Nullable } from "@wraithlight/core.nullable";

import { LogsCollectorDbContextFactory } from "./context";
import { ApplicationDbo } from "./dbo";

export class ApplicationRepository {

    private readonly _dbContext = LogsCollectorDbContextFactory.getAuthDbContext();

    public async listAll(): Promise<ReadonlyArray<ApplicationDbo>> {
        return this._dbContext.Applications
            .select()
            .toList()
        ;
    }

    public async findName(id: number): Promise<Nullable<string>> {
        return this._dbContext.Applications
            .select()
            .where("id", id)
            .first()
            .then(m => m?.application)
        ;
    }

    public findAllNames(): Promise<ReadonlyArray<string>> {
        return this._dbContext.Applications
            .select()
            .toList()
            .then(m => m.map(o => o.application))
    }

}
