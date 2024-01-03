import { SchedulerService } from "./scheduler";

const queueTaskSpy = jest.fn();
const hasTaskSpy = jest.fn();
const listQueuedTasksSpy = jest.fn();
const runTaskSpy = jest.fn();
const unqueueTaskSpy = jest.fn();

jest.mock("@wraithlight/facade.node-cron", () => {
    return {
        NodeCronFacade: jest
            .fn()
            .mockImplementation(() => {
                return {
                    queueTask: queueTaskSpy,
                    hasTask: hasTaskSpy,
                    listQueuedTasks: listQueuedTasksSpy,
                    runTask: runTaskSpy,
                    unqueueTask: unqueueTaskSpy,
                }
            })
    }
})

describe("SchedulerServiceSpecs", () => {

    const MOCK_CRON = "cron";
    const MOCK_TASK_NAME = "name";
    const MOCK_TASK = () => undefined;

    let service: SchedulerService;
    describe("given the service is initialized", () => {
        service = new SchedulerService();
        describe("when i add a new task", () => {
            beforeAll(() => {
                service.scheduleTask(
                    MOCK_TASK_NAME,
                    MOCK_CRON,
                    MOCK_TASK
                );
            });
            afterAll(() => {
                queueTaskSpy.mockReset();
            });
            it("should call the underlying method", () => {
                expect(queueTaskSpy).toHaveBeenCalled();
                expect(queueTaskSpy).toHaveBeenCalledTimes(1);
                expect(queueTaskSpy).toHaveBeenCalledWith(
                    MOCK_TASK_NAME,
                    MOCK_CRON,
                    MOCK_TASK
                );
            });
        });
        describe("when i check if a task exists", () => {
            beforeAll(() => {
                service.hasTask(MOCK_TASK_NAME);
            });
            afterAll(() => {
                hasTaskSpy.mockReset();
            });
            it("should call the underlying method", () => {
                expect(hasTaskSpy).toHaveBeenCalled();
                expect(hasTaskSpy).toHaveBeenCalledTimes(1);
                expect(hasTaskSpy).toHaveBeenCalledWith(MOCK_TASK_NAME);
            });
        });
        describe("when i get all tasks", () => {
            beforeAll(() => {
                service.getAllTasks();
            });
            afterAll(() => {
                listQueuedTasksSpy.mockReset();
            });
            it("should call the underlying method", () => {
                expect(listQueuedTasksSpy).toHaveBeenCalled();
                expect(listQueuedTasksSpy).toHaveBeenCalledTimes(1);
                expect(listQueuedTasksSpy).toHaveBeenCalledWith();
            });
        });
        describe("when i run a specific task", () => {
            beforeAll(() => {
                service.runTask(MOCK_TASK_NAME);
            });
            afterAll(() => {
                runTaskSpy.mockReset();
            });
            it("should call the underlying method", () => {
                expect(runTaskSpy).toHaveBeenCalled();
                expect(runTaskSpy).toHaveBeenCalledTimes(1);
                expect(runTaskSpy).toHaveBeenCalledWith(MOCK_TASK_NAME);
            });
        });
        describe("when i remove a task", () => {
            beforeAll(() => {
                service.removeTask(MOCK_TASK_NAME);
            });
            afterAll(() => {
                unqueueTaskSpy.mockReset();
            });
            it("should call the underlying method", () => {
                expect(unqueueTaskSpy).toHaveBeenCalled();
                expect(unqueueTaskSpy).toHaveBeenCalledTimes(1);
                expect(unqueueTaskSpy).toHaveBeenCalledWith(MOCK_TASK_NAME);
            });
        });
    });
});
