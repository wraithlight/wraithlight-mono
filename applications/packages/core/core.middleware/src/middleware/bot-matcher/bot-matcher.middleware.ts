import { Nullable, isNil } from "@wraithlight/framework.nullable";
import { NextFunction, Request, Response } from "express";

import { isBot } from "./_internal";
import {
  IS_BOT_HEADER_NAME,
  USER_AGENT_HEADER_NAME
} from "./bot-matcher.const";

export function botMatcherMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const userAgent = req.get(USER_AGENT_HEADER_NAME);
  const isVisitorABot = hasNoUserAgent(userAgent) || isBot(userAgent ?? "");
  req.headers[IS_BOT_HEADER_NAME] = isVisitorABot.toString();
  next();
}

function hasNoUserAgent(userAgent: Nullable<string>): boolean {
  return isNil(userAgent) || userAgent === "";
}
