export interface Socket {
    id: string;
    onAny(handler: (topic: string, message: string) => void): void;
}
