export interface Socket {
    id: string;
    on(topic: string, handler: (message: string) => void): void;
    onAny(handler: (topic: string, message: string) => void): void;
}
