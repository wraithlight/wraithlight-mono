const facadeCtorSpy = jest.fn();
const connectSpy = jest.fn();
const disconnectSpy = jest.fn();
const onMessageSpy = jest.fn();
const sendSpy = jest.fn();
const isConnectedSpy = jest.fn();

jest.mock("@wraithlight/facade.socketio.client", () => {
    return {
        SocketIOFacade: facadeCtorSpy.mockImplementation(() => {
            return {
                connect: connectSpy,
                disconnect: disconnectSpy,
                onMessage: onMessageSpy,
                send: sendSpy,
                isConnected: isConnectedSpy
            }
        })
    }
});

import { RealtimeService } from "./realtime.service";

describe("RealtimeServiceSpecs", () => {

    let service: RealtimeService;
    const MOCK_URL = "url";
    const MOCK_PATH = "realtime";
    const MOCK_TOPIC = "topic";
    const MOCK_MESSAGE = "message";
    const MOCK_HANDLER = () => undefined;

    describe("given the service is initialized", () => {
        beforeAll(() => {
            service = new RealtimeService(MOCK_URL, MOCK_PATH);
        });

        it("should create a facade instance", () => {
            expect(facadeCtorSpy).toHaveBeenCalled();
            expect(facadeCtorSpy).toHaveBeenCalledTimes(1);
            expect(facadeCtorSpy).toHaveBeenCalledWith(MOCK_URL, MOCK_PATH, false);
        });

        describe("when i call `connect()`", () => {
            afterEach(() => {
                jest.clearAllMocks();
            });
            describe("and i'm not connected", () => {
                beforeEach(() => {
                    isConnectedSpy.mockImplementation(() => false);
                    service.connect();
                });
                it("should check the facade if it's connected", () => {
                    expect(isConnectedSpy).toHaveBeenCalled();
                    expect(isConnectedSpy).toHaveBeenCalledTimes(1);
                    expect(isConnectedSpy).toHaveBeenCalledWith();
                });
                it("should call the facade to connect", () => {
                    expect(connectSpy).toHaveBeenCalled();
                    expect(connectSpy).toHaveBeenCalledTimes(1);
                    expect(connectSpy).toHaveBeenCalledWith();
                });
            });
            describe("and i'm connected", () => {
                beforeEach(() => {
                    isConnectedSpy.mockImplementation(() => true);
                    service.connect();
                });
                it("should check the facade if it's connected", () => {
                    expect(isConnectedSpy).toHaveBeenCalled();
                    expect(isConnectedSpy).toHaveBeenCalledTimes(1);
                    expect(isConnectedSpy).toHaveBeenCalledWith();
                });
                it("should not call the facade to connect", () => {
                    expect(connectSpy).not.toHaveBeenCalled();
                    expect(connectSpy).not.toHaveBeenCalledTimes(1);
                    expect(connectSpy).not.toHaveBeenCalledWith();
                });
            });
        });

        describe("when i call `disconnect()`", () => {
            afterEach(() => {
                jest.clearAllMocks();
            });
            describe("and i'm not connected", () => {
                beforeEach(() => {
                    isConnectedSpy.mockImplementation(() => false);
                    service.disconnect();
                });
                it("should check the facade if it's connected", () => {
                    expect(isConnectedSpy).toHaveBeenCalled();
                    expect(isConnectedSpy).toHaveBeenCalledTimes(1);
                    expect(isConnectedSpy).toHaveBeenCalledWith();
                });
                it("should not call the facade to disconnect", () => {
                    expect(disconnectSpy).not.toHaveBeenCalled();
                    expect(disconnectSpy).not.toHaveBeenCalledTimes(1);
                    expect(disconnectSpy).not.toHaveBeenCalledWith();
                });
            });
            describe("and i'm connected", () => {
                beforeEach(() => {
                    isConnectedSpy.mockImplementation(() => true);
                    service.disconnect();
                });
                it("should check the facade if it's connected", () => {
                    expect(isConnectedSpy).toHaveBeenCalled();
                    expect(isConnectedSpy).toHaveBeenCalledTimes(1);
                    expect(isConnectedSpy).toHaveBeenCalledWith();
                });
                it("should call the facade to discconnect", () => {
                    expect(disconnectSpy).toHaveBeenCalled();
                    expect(disconnectSpy).toHaveBeenCalledTimes(1);
                    expect(disconnectSpy).toHaveBeenCalledWith();
                });
            });
        });

        describe("when i call `on()`", () => {
            beforeEach(() => {
                service.on(MOCK_TOPIC, MOCK_HANDLER)
            });
            it("should call the facade to add the listener", () => {
                expect(onMessageSpy).toHaveBeenCalled();
                expect(onMessageSpy).toHaveBeenCalledTimes(1);
                expect(onMessageSpy).toHaveBeenCalledWith(MOCK_TOPIC, expect.any(Function));
            });
        });

        describe("when i call `send()`", () => {
            beforeEach(() => {
                service.send(MOCK_TOPIC, MOCK_MESSAGE);
            });
            it("should call the facade to send the message", () => {
                expect(sendSpy).toHaveBeenCalled();
                expect(sendSpy).toHaveBeenCalledTimes(1);
                expect(sendSpy).toHaveBeenCalledWith(
                    MOCK_TOPIC,
                    JSON.stringify({
                        payload: MOCK_MESSAGE
                    })
                );
            });
        });
    });
});
