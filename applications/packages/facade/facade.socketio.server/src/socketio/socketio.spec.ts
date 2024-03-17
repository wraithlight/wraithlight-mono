const removeAllListenersSpy = jest.fn();
const closeSpy = jest.fn();
const onSpy = jest.fn();
const emitSpy = jest.fn();

jest.mock("socket.io", () => {
    return {
        Server: jest.fn().mockImplementation(() => {
            return {
                removeAllListeners: removeAllListenersSpy,
                close: closeSpy,
                on: onSpy,
                emit: emitSpy
            }
        })
    }    
});

import { Server } from "http";
import { SocketIOFacade} from "./socketio";
import { EVT_CONNECTION, EVT_DISCONNECT } from "./socketio.const";

describe("SocketIOFacadeSpecs", () => {

    const MOCK_MESSAGE = "yarr";
    const MOCK_PATH = "/realtime";
    const MOCK_TOPIC = "wraithlight";
    const MOCK_APP: Server = new Server()
    const MOCK_CONNECTION_CALLBACK = () => { };
    const MOCK_DISCONNECT_CALLBACK = () => { };
    const MOCK_EVENT_CALLBACK = () => { };

    let service: SocketIOFacade;

    describe("given the class is initialized", () => {
        afterEach(() => {
            onSpy.mockReset();
        });
        describe("when i create a new instance", () => {
            beforeEach(() => {
                service = new SocketIOFacade(
                    MOCK_APP,
                    MOCK_PATH,
                    MOCK_CONNECTION_CALLBACK,
                    MOCK_DISCONNECT_CALLBACK,
                    MOCK_EVENT_CALLBACK
                );
            })
            it("shoudl register all callbacks", () => {
                expect(onSpy).toHaveBeenCalled();
                expect(onSpy).toHaveBeenCalledTimes(2);
            });
            it("should register connection callback", () => {
                expect(onSpy).toHaveBeenNthCalledWith(1, EVT_CONNECTION, expect.any(Function));
            });
            it("should register disconnect callback", () => {
                expect(onSpy).toHaveBeenNthCalledWith(2, EVT_DISCONNECT, expect.any(Function));
            });
        });
        describe("when i broadcast to all listeners", () => {
            beforeEach(() => {
                service.broadcastToAll(MOCK_TOPIC, MOCK_MESSAGE);
            });
            it("should send it to all listeners", () => {
                expect(emitSpy).toHaveBeenCalled();
                expect(emitSpy).toHaveBeenCalledTimes(1);
                expect(emitSpy).toHaveBeenCalledWith(MOCK_TOPIC, MOCK_MESSAGE);
            });
        });
        describe("when i close the server", () => {
            beforeEach(() => {
                service.close();
            });
            it("should remove all listeners", () => {
                expect(removeAllListenersSpy).toHaveBeenCalled();
                expect(removeAllListenersSpy).toHaveBeenCalledTimes(1);
                expect(removeAllListenersSpy).toHaveBeenCalledWith();
            });
            it("should close the server", () => {

            });
        });
    });

});
