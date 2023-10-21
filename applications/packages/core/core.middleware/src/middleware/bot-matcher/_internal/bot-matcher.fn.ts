import { BOT_PATTERNS } from "./bot-matcher.const"

const BOT_REGEXES = BOT_PATTERNS.map(m => new RegExp(m));

export function isBot(userAgent: string): boolean {
    return BOT_REGEXES.map(m => m.test(userAgent)).includes(true);
}
