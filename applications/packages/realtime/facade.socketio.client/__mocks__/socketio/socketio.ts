export const SocketIOFacade = jest
    .fn()
    .mockImplementation(() => {
        return {
            isConnected: jest.fn(),
            connect: jest.fn(),
            disconnect: jest.fn(),
            onMessage: jest.fn(),
            send: jest.fn()
        };
    })
;
