import {
    getTasks,
    schedule,
    validate
} from "node-cron";

export class NodeCronFacade {

    public queueTask(
        name: string,
        cronExpression: string,
        taskRef: () => void
    ): string {
        const isValid = validate(cronExpression);
        if (isValid) {
            schedule(
                cronExpression,
                () => taskRef(),
                {
                    name: name
                }
            );
        }
        return name;
    }

    public unqueueTask(
        key: string
    ): void {
        const tasks = getTasks();
        if (tasks.has(key)) {
            const task = tasks.get(key);
            task?.stop();
        }
    }

    public hasTask(
        key: string
    ): boolean {
        return getTasks().has(key);
    }

    public runTask(
        key: string
    ): void {
        const tasks = getTasks();
        if (tasks.has(key)) {
            const task = tasks.get(key);
            task?.start();
        }
    }

    public listQueuedTasks(): ReadonlyArray<string> {
        return Array.from(getTasks().keys());
    }

}
