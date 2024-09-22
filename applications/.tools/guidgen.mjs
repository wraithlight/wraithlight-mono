import { newGuid } from "@wraithlight/core.guid";
import { LoggerService } from "@wraithlight/common.logger.sdk";

LoggerService.initialize({
    applicationName: "guidgen",
    enabledLogSeverities: [
        "INF" // TODO: since its a const enum it cannot be imported in mjs files
    ]
});

const loggerService = LoggerService.getInstance();

const numberOfGuidsStr = process.argv[2];
const numberOfGuids = Number(numberOfGuidsStr) || 1;

Array.from({ length: numberOfGuids }).forEach(_ => generateAndPrintGuid())

function generateAndPrintGuid() {
    const guid = newGuid();

    const banner = "".padStart(guid.length + 4, "#");
    const line = ""
        .padStart(guid.length + 2, " ")
        .padStart(1, "#")
        .padEnd(1, "#")
    ;
    const guidLine = `# ${guid} #`
    
    loggerService.info(`
        ${banner}
        #${line}#
        ${guidLine}
        #${line}#
        ${banner}
    `);
    
}
