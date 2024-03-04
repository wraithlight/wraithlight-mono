import { Application } from "express";

const createServerSpy = jest.fn();
const facadeCtorSpy = jest.fn();
const messageBusCtorSpy = jest.fn();

const broadcastToAllSpy = jest.fn();
const closeSpy = jest.fn();
const addListenerSpy = jest.fn();

jest.mock("http", () => {
    return {
        createServer: createServerSpy
    }
});

jest.mock("@wraithlight/core.messagebus", () => {
    return {
        MessagebusService: messageBusCtorSpy.mockImplementation(() => {
            return {}
        })
    }
});

jest.mock("@wraithlight/facade.socketio.server", () => {
    return {
        SocketIOFacade: facadeCtorSpy.mockImplementation(() => {
            return {
                broadcastToAll: broadcastToAllSpy,
                close: closeSpy,
                addListener: addListenerSpy,
            }
        })
    }
});

import { RealtimeProvider } from "./realtime.provider";

describe("RealtimeProviderSpecs", () => {

    let service: RealtimeProvider;
    const MOCK_APP = "application" as unknown as Application;
    const MOCK_PATH = "path";
    const MOCK_TOPIC = "topic";
    const MOCK_MESSAGE = "message";
    const MOCK_LISTENER = () => {}

    describe("given the provider is initialitzed", () => {

        beforeAll(() => {
            service = new RealtimeProvider(
                MOCK_APP,
                MOCK_PATH
            );
        });

        it("should create a http listener", () => {
            expect(createServerSpy).toHaveBeenCalled();
            expect(createServerSpy).toHaveBeenCalledTimes(1);
            expect(createServerSpy).toHaveBeenCalledWith(MOCK_APP);
        });
        it("should create a facade instance", () => {
            expect(facadeCtorSpy).toHaveBeenCalled();
            expect(facadeCtorSpy).toHaveBeenCalledTimes(1);
            expect(facadeCtorSpy).toHaveBeenCalledWith(
                undefined,
                MOCK_PATH,
                expect.any(Function),
                expect.any(Function)
            );
        });
        it("should create a messagebus instance", () => {
            expect(messageBusCtorSpy).toHaveBeenCalled();
            expect(messageBusCtorSpy).toHaveBeenCalledTimes(1);
            expect(messageBusCtorSpy).toHaveBeenCalledWith();
        });

        describe("when i call sendToAll", () => {
            beforeEach(() => {
                service.sendToAll(MOCK_TOPIC, MOCK_MESSAGE);
            });
            it("should dispatch the message through the facade", () => {
                expect(broadcastToAllSpy).toHaveBeenCalled();
                expect(broadcastToAllSpy).toHaveBeenCalledTimes(1);
                expect(broadcastToAllSpy).toHaveBeenCalledWith(
                    MOCK_TOPIC,
                    JSON.stringify({
                        payload: MOCK_MESSAGE
                    })
                );
            });
        });

        describe("when i call close", () => {
            beforeEach(() => {
                service.close();
            })
            it("should close the connection through the facade", () => {
                expect(closeSpy).toHaveBeenCalled();
                expect(closeSpy).toHaveBeenCalledTimes(1);
                expect(closeSpy).toHaveBeenCalledWith()
            });
        });

        describe("when i call listenTo", () => {
            beforeEach(() => {
                service.listenTo(MOCK_TOPIC, MOCK_LISTENER)
            })
            it("should register a new listener through the facade", () => {
                expect(addListenerSpy).toHaveBeenCalled();
                expect(addListenerSpy).toHaveBeenCalledTimes(1);
                expect(addListenerSpy).toHaveBeenCalledWith(
                    MOCK_TOPIC,
                    expect.any(Function)
                );
            });
        });
    });
});
