import { Emitter } from "./socketio.type";

interface Broadcast {
    emit: Emitter;
}

export interface Socket {
    broadcast: Broadcast;
    on(topic: string, handler: (message: string) => void): void;
}
