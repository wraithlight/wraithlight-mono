import { ScheduledTask } from "node-cron";

let MOCK_CRON_IS_VALID = true;

const startSpy = jest.fn();
const stopSpy = jest.fn();

const getTasksMock = () => new Map<string, any>([
    ["task-1", {
        start: startSpy,
        stop: stopSpy
    }]
])
const getTasksSpy = jest.fn().mockImplementation(getTasksMock);
const scheduleSpy = jest.fn().mockReturnValue(undefined as unknown as ScheduledTask);
const validateSpy = jest.fn().mockImplementation(() => MOCK_CRON_IS_VALID);

jest.mock("node-cron", () => {
    return {
        getTasks: getTasksSpy,
        schedule: scheduleSpy,
        validate: validateSpy
    }
});

import { NodeCronFacade } from "./node-cron";

describe("NodeCronFacadeSpecs", () => {

    let service: NodeCronFacade;
    const MOCK_CRON = "0 5 31 2 *";
    const MOCK_CRON_INVALID = "not-a-cron";
    const MOCK_TASK_NAME = "task-1";
    const MOCK_TASK = () => "wraithight";

    describe("given the utility is initialized", () => {

        service = new NodeCronFacade();

        describe("when i queue a new task", () => {
            describe("and i use valid parameters", () => {
                beforeAll(() => {
                    MOCK_CRON_IS_VALID = true;
                    service.queueTask(
                        MOCK_TASK_NAME,
                        MOCK_CRON,
                        MOCK_TASK
                    );
                });
                afterAll(() => {
                    MOCK_CRON_IS_VALID = true;
                    validateSpy.mockClear();
                    scheduleSpy.mockClear();
                });
                it("should validate the cron expression", () => {
                    expect(validateSpy).toHaveBeenCalled();
                    expect(validateSpy).toHaveBeenCalledWith(MOCK_CRON);
                    expect(validateSpy).toHaveBeenCalledTimes(1);
                });
                it("should call the underlying method", () => {
                    expect(scheduleSpy).toHaveBeenCalled();
                    expect(scheduleSpy).toHaveBeenCalledWith(
                        MOCK_CRON,
                        expect.any(Function),
                        {
                            name: MOCK_TASK_NAME
                        }
                    );
                    expect(scheduleSpy).toHaveBeenCalledTimes(1);
                });
            });
            describe("and i use invalid parameters", () => {
                beforeAll(() => {
                    MOCK_CRON_IS_VALID = false;
                    service.queueTask(
                        MOCK_TASK_NAME,
                        MOCK_CRON_INVALID,
                        MOCK_TASK
                    );
                });
                afterAll(() => {
                    MOCK_CRON_IS_VALID = true;
                    validateSpy.mockClear();
                    scheduleSpy.mockClear();
                });
                it("should validate the cron expression", () => {
                    expect(validateSpy).toHaveBeenCalled();
                    expect(validateSpy).toHaveBeenCalledWith(MOCK_CRON_INVALID);
                    expect(validateSpy).toHaveBeenCalledTimes(1);
                });
                it("should not call the underlying method", () => {
                    expect(scheduleSpy).not.toHaveBeenCalled();
                    expect(scheduleSpy).not.toHaveBeenCalledWith(
                        MOCK_CRON_INVALID,
                        expect.any(() => undefined),
                        {
                            name: MOCK_TASK_NAME
                        }
                    );
                    expect(scheduleSpy).not.toHaveBeenCalledTimes(1);
                });
            });
        });

        describe("when i check if a task exists", () => {
            let result: boolean;
            beforeAll(() => {
                result = service.hasTask(MOCK_TASK_NAME);
            });
            afterAll(() => {
                getTasksSpy.mockReset();
                getTasksSpy.mockImplementation(getTasksMock);
            });
            it("should call the underlying method", () => {
                expect(getTasksSpy).toHaveBeenCalled();
            });
            it("should return a boolean", () => {
                expect(typeof result).toBe("boolean");
            });
        });
        describe("when i unqueue a task", () => {
            beforeAll(() => {
                service.unqueueTask(MOCK_TASK_NAME);
            });
            afterAll(() => {
                stopSpy.mockReset();
                getTasksSpy.mockReset();
                getTasksSpy.mockImplementation(getTasksMock);
            });
            it("should call the underlying method", () => {
                expect(getTasksSpy).toHaveBeenCalled();
                expect(getTasksSpy).toHaveBeenCalledTimes(1);
                expect(getTasksSpy).toHaveBeenCalledWith();
            });
            it("should stop the task", () => {
                expect(stopSpy).toHaveBeenCalled();
                expect(stopSpy).toHaveBeenCalledTimes(1);
                expect(stopSpy).toHaveBeenCalledWith();
            });
        });
        describe("when i run a task", () => {
            beforeAll(() => {
                service.runTask(MOCK_TASK_NAME);
            });
            afterAll(() => {
                startSpy.mockReset();
                getTasksSpy.mockReset();
                getTasksSpy.mockImplementation(getTasksMock);
            });
            it("should call the underlying method", () => {
                expect(getTasksSpy).toHaveBeenCalled();
                expect(getTasksSpy).toHaveBeenCalledTimes(1);
                expect(getTasksSpy).toHaveBeenCalledWith();
            });
            it("should stop the task", () => {
                expect(startSpy).toHaveBeenCalled();
                expect(startSpy).toHaveBeenCalledTimes(1);
                expect(startSpy).toHaveBeenCalledWith();
            });
        });
        describe("when i list all tasks", () => {
            beforeAll(() => {
                service.listQueuedTasks();
            });
            afterAll(() => {
                getTasksSpy.mockReset();
                getTasksSpy.mockImplementation(getTasksMock);
            });
            it("should call the underlying method", () => {
                expect(getTasksSpy).toHaveBeenCalled();
                expect(getTasksSpy).toHaveBeenCalledTimes(1);
                expect(getTasksSpy).toHaveBeenCalledWith();
            });
        });
    });
});
