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
  "www.local.user-management.wraithlight.ai",
  "www.local.content.wraithlight.ai",
  "www.local.editor.wraithlight.ai",
  "www.local.forum.wraithlight.ai",
  "www.local.game-app.wraithlight.ai",
  "www.local.game-web.wraithlight.ai",
  "www.local.logs.wraithlight.ai",
  "www.local.website.wraithlight.ai",
  "www.local.notifier.wraithlight.ai",
  "www.local.remote-config.wraithlight.ai",
  "www.local.ess.comms.wraithlight.ai",
  "www.local.nps.comms.wraithlight.ai",
  "www.local.pss.comms.wraithlight.ai",
  "www.local.sss.comms.wraithlight.ai",

  "www.dev.user-management.wraithlight.ai",
  "www.dev.content.wraithlight.ai",
  "www.dev.editor.wraithlight.ai",
  "www.dev.forum.wraithlight.ai",
  "www.dev.game-app.wraithlight.ai",
  "www.dev.game-web.wraithlight.ai",
  "www.dev.logs.wraithlight.ai",
  "www.dev.website.wraithlight.ai",
  "www.dev.notifier.wraithlight.ai",
  "www.dev.remote-config.wraithlight.ai",
  "www.dev.ess.comms.wraithlight.ai",
  "www.dev.nps.comms.wraithlight.ai",
  "www.dev.pss.comms.wraithlight.ai",
  "www.dev.sss.comms.wraithlight.ai",
];
const dbUrls = [
  "www.local.db-user-management.wraithlight.ai:9000",
  "www.local.db-logs.wraithlight.ai:9001",
  "www.local.db-content.wraithlight.ai:9002",
  "www.local.db-forum.wraithlight.ai:9003",
  "www.local.db-game.wraithlight.ai:9004",
  "www.local.db-notifier.wraithlight.ai:9009",
  "www.local.db-remote-config.wraithlight.ai:9010",
  "www.local.db-comms-nps.wraithlight.ai:9011",
  "www.local.db-comms-pss.wraithlight.ai:9012",
  "www.local.db-comms-sss.wraithlight.ai:9013",
  "www.local.db-comms-ess.wraithlight.ai:9014",

  "www.dev.db-user-management.wraithlight.ai:9000",
  "www.dev.db-logs.wraithlight.ai:9001",
  "www.dev.db-content.wraithlight.ai:9002",
  "www.dev.db-forum.wraithlight.ai:9003",
  "www.dev.db-game.wraithlight.ai:9004",
  "www.dev.db-notifier.wraithlight.ai:9009",
  "www.dev.db-remote-config.wraithlight.ai:9010",
  "www.dev.db-comms-nps.wraithlight.ai:9011",
  "www.dev.db-comms-pss.wraithlight.ai:9012",
  "www.dev.db-comms-sss.wraithlight.ai:9013",
  "www.dev.db-comms-ess.wraithlight.ai:9014",
];

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
  newHosts = newHosts.replace(pattern, "");
}

newHosts = newHosts.concat(wraithlightData.join(EOL));
const { mode } = statSync(HOSTS_PATH);
writeFileSync(HOSTS_PATH, newHosts, { mode });
