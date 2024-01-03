import { SocketIOFacade } from "./socketio";

const onSpy = jest.fn();
const emitSpy = jest.fn();
const connectSpy = jest.fn();
const disconnectSpy = jest.fn();

const MOCK_TOPIC = "my-topic";
const MOCK_MESSAGE = "message";
const MOCK_CALLBACK = (message: string) => console.log(message);
const MOCK_URL = "/realtime";
const MOCK_SOCKET = {
    connected: true,
    on: onSpy,
    emit: emitSpy,
    connect: connectSpy,
    disconnect: disconnectSpy
};

jest.mock("socket.io-client", () => {
    return {
        connect: jest.fn().mockImplementation(() => MOCK_SOCKET)
    }
});

import { connect } from "socket.io-client";

describe("SocketIOFacadeSpecs", () => {

    let service: SocketIOFacade;

    describe("given the service is initalized", () => {
        service = new SocketIOFacade(MOCK_URL)
        describe("when i create a new instance", () => {
            it("should call native connect", () => {
                expect(connect).toHaveBeenCalled();
                expect(connect).toHaveBeenCalledTimes(1);
                expect(connect).toHaveBeenCalledWith(
                    MOCK_URL,
                    {
                        autoConnect: true
                    }
                );
            });
        });
        describe("when i call connect", () => {
            beforeAll(() => {
                service.connect();
            });
            afterAll(() => {
                connectSpy.mockReset();
            });
            it("should call the native connect", () => {
                expect(connectSpy).toHaveBeenCalled();
                expect(connectSpy).toHaveBeenCalledWith();
                expect(connectSpy).toHaveBeenCalledTimes(1);
            });
        });
        describe("when i call disconnect", () => {
            beforeAll(() => {
                service.disconnect();
            });
            afterAll(() => {
                disconnectSpy.mockReset();
            });
            it("should call the native disconnect", () => {
                expect(disconnectSpy).toHaveBeenCalled();
                expect(disconnectSpy).toHaveBeenCalledWith();
                expect(disconnectSpy).toHaveBeenCalledTimes(1);
            });
        });
        describe("when i add a new listener", () => {
            beforeAll(() => {
                service.onMessage(MOCK_TOPIC, MOCK_CALLBACK);
            });
            afterAll(() => {
                onSpy.mockReset();
            });
            it("should call the native on", () => {
                expect(onSpy).toHaveBeenCalled();
                expect(onSpy).toHaveBeenCalledTimes(1);
                expect(onSpy).toHaveBeenCalledWith(MOCK_TOPIC, expect.any(Function));
            });
        });
        describe("when i send a new message", () => {
            beforeAll(() => {
                service.send(MOCK_TOPIC, MOCK_MESSAGE);
            });
            afterAll(() => {
                emitSpy.mockReset();
            });
            it("should call the native on", () => {
                expect(emitSpy).toHaveBeenCalled();
                expect(emitSpy).toHaveBeenCalledTimes(1);
                expect(emitSpy).toHaveBeenCalledWith(MOCK_TOPIC, MOCK_MESSAGE);
            });
        });
    });
});
