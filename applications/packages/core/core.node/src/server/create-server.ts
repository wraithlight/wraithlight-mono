import cors from "cors";
import express from "express";

import { AppRef } from "./appref.model";
import { AppRef as AppRefImpl } from "./appref";

export function createServer(
    enableCors: boolean
): AppRef {
    process.on('uncaughtException', function (err) {
        console.error(JSON.stringify(err));
        console.log("Global exception caught!");
    });

    const app = express();

    app.use(express.json({ limit: "2mb" }));

    if (enableCors) {
        app.use(cors());
    }

    return new AppRefImpl(app);
}
