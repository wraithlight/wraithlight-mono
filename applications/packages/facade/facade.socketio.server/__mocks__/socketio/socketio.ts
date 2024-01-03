export const SocketIOFacade = jest
    .fn()
    .mockImplementation(() => {
        return {
            addListener: jest.fn(),
            broadcastToAll: jest.fn(),
            close: jest.fn(),
        }
    })
;
