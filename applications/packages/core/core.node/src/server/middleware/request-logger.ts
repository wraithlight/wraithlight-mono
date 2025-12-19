import { LoggerService } from "@wraithlight/common.logger.sdk";
import { NextFunction, Request, Response } from "express";

export function requestLogger(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const logger = LoggerService.getInstance();
  logger.info(`[REQUEST] ${req.method} ${req.path}`);
  next();
}
