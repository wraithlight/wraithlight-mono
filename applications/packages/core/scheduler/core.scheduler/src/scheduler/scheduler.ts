import { NodeCronFacade } from "@wraithlight/facade.node-cron";

import { CronJob } from "./scheduler.type";

export class SchedulerService {

    private readonly _nodeCronFacade = new NodeCronFacade();

    public scheduleTask(
        name: string,
        cronExpression: string,
        taskRef: CronJob
    ): string {
        return this._nodeCronFacade.queueTask(
            name,
            cronExpression,
            taskRef
        );
    }

    public hasTask(
        name: string
    ): boolean {
        return this._nodeCronFacade.hasTask(name);
    }

    public getAllTasks(): ReadonlyArray<string> {
        return this._nodeCronFacade.listQueuedTasks();
    }

    public runTask(name: string): void {
        this._nodeCronFacade.runTask(name);
    }

    public removeTask(name: string): void {
        this._nodeCronFacade.unqueueTask(name);
    }

}
