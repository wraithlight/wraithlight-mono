import types from "@wraithlight/core.types";

const guid = types.newGuid();

const banner = "".padStart(guid.length + 4, "#");
const line = ""
    .padStart(guid.length + 2, " ")
    .padStart(1, "#")
    .padEnd(1, "#")
;
const guidLine = `# ${guid} #`

console.log(`
    ${banner}
    #${line}#
    ${guidLine}
    #${line}#
    ${banner}
`);
