import { Server } from "http";

export type IProviderFactory = (server: Server) => void;
