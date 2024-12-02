export interface ServerStartPayload {
  stopSignal: () => void;
}

export interface ServerOptions {
  maxPayloadSizeMB: number;
  enableCors: boolean;
}
