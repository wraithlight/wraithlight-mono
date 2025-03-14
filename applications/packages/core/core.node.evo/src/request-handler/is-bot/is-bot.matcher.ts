import { Nullable, isEmptyStringOrNil } from "@wraithlight/framework.nullable";

import { IS_BOT_REGEX_LIST } from "./is-bot.const";

export const isBot = (userAgent: Nullable<string>): boolean => {
  if (isEmptyStringOrNil(userAgent)) {
    return true;
  }
  return IS_BOT_REGEX_LIST
    .map(m => new RegExp(m))
    .map(m => m.test(userAgent))
    .includes(true)
  ;
};
