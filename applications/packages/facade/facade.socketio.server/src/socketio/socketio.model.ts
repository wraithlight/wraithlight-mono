import { Emitter } from "./socketio.type";

interface Broadcast {
    emit: Emitter;
}

export interface Socket {
    broadcast: Broadcast;
}
