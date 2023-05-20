import { LoggerService } from "@wraithlight/core.logger";
import cors from "cors";
import express from "express";

import { AppRef } from "./appref.model";
import { AppRef as AppRefImpl } from "./appref";

export function createServer(
    enableCors: boolean
): AppRef {
    const logger = LoggerService.getInstance();
    process.on('uncaughtException', function (err) {
        logger.warn("Global exception caught!", JSON.stringify(err));
    });

    const app = express();

    app.use(express.json({ limit: "2mb" }));

    if (enableCors) {
        app.use(cors());
    }

    return new AppRefImpl(app);
}
