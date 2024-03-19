import { Server } from "http";

const facadeCtorSpy = jest.fn();
const messageBusCtorSpy = jest.fn();

const broadcastToAllSpy = jest.fn();
const closeSpy = jest.fn();
const addListenerSpy = jest.fn();

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
    const MOCK_APP = "application" as unknown as Server;
    const MOCK_PATH = "path";
    const MOCK_TOPIC = "topic";
    const MOCK_MESSAGE = "message";

    describe("given the provider is initialitzed", () => {

        beforeAll(() => {
            service = new RealtimeProvider(
                MOCK_APP,
                MOCK_PATH
            );
        });

        it("should create a facade instance", () => {
            expect(facadeCtorSpy).toHaveBeenCalled();
            expect(facadeCtorSpy).toHaveBeenCalledTimes(1);
            expect(facadeCtorSpy).toHaveBeenCalledWith(
                MOCK_APP,
                MOCK_PATH,
                expect.any(Function),
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
    });
});
