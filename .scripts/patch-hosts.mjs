import { statSync, readFileSync, writeFileSync } from "fs";
import { EOL } from "os";

const HOSTS_PATH = process.platform === "win32"
    ? "C:\\Windows\\System32\\drivers\\etc\\hosts"
    : "/private/etc/hosts"
;

const hosts = readFileSync(HOSTS_PATH).toString();
const wraithlightBannerStart = "# WRAITHLIGHT";
const wraithlightBannerEnd = "# /WRAITHLIGHT";

const appUrls = [
    "www.dev.auth.wraithlight.ai",
    "www.dev.content.wraithlight.ai",
    "www.dev.editor.wraithlight.ai",
    "www.dev.forum.wraithlight.ai",
    "www.dev.game-webiste.wraithlight.ai",
    "www.dev.logs.wraithlight.ai",
    "www.dev.notifier.wraithlight.ai",
    "www.dev.website.wraithlight.ai"
];
const dbUrls = [
    "www.dev.db-auth.wraithlight.ai",
    "www.dev.db-content.wraithlight.ai",
]

const wraithlightData = [
    wraithlightBannerStart,
    "# wl apps",
    ...appUrls.map(m => `${m}\t127.0.0.1`),
    "# wl dbs",
    ...dbUrls.map(m => `${m}\t127.0.0.1`),
    wraithlightBannerEnd
];

let newHosts = hosts;
if (hosts.includes(wraithlightBannerStart) && hosts.includes(wraithlightBannerEnd)) {
    const pattern = new RegExp(`(${wraithlightBannerStart})((.|\n)*)(${wraithlightBannerEnd})`, "gm");
    console.log(pattern);
    newHosts = newHosts.replace(pattern, "");
}

newHosts = newHosts.concat(wraithlightData.join(EOL));
console.log(newHosts);
const { mode } = statSync(HOSTS_PATH);
writeFileSync(HOSTS_PATH, newHosts, { mode });
