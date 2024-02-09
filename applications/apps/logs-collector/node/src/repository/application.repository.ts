import { Nullable } from "@wraithlight/core.nullable";

import { LogsCollectorDbContextFactory } from "./context";
import { ApplicationDbo } from "./dbo";

export class ApplicationRepository {

    private readonly _dbContext = LogsCollectorDbContextFactory
        .getAuthDbContext();

    public async delete(id: number): Promise<boolean> {
        return this._dbContext.Applications
            .delete()
            .where("id", id)
            .run()
            .then(() => true)
            .catch(() => false)
        ;
    }

    public async listAll(): Promise<ReadonlyArray<ApplicationDbo>> {
        return this._dbContext.Applications
            .select()
            .toList()
        ;
    }

    public async findById(id: number): Promise<Nullable<ApplicationDbo>> {
        return this._dbContext.Applications
            .select()
            .where("id", id)
            .first()
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

    public async update(
        id: number,
        entity: Partial<ApplicationDbo>
    ): Promise<boolean> {
        return this._dbContext.Applications
            .update("id", id, entity)
            .run()
            .then(() => true)
            .catch(() => false)
        ;
    }

    public async create(
        entity: ApplicationDbo
    ): Promise<boolean> {
        return this._dbContext.Applications
            .insert(entity)
            .run()
            .then(() => true)
            .catch(() => false)
        ;
    }

}
