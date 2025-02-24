import { fileURLToPath } from 'url';
import { dirname, join } from "path";
import { copyFileSync, existsSync, unlinkSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const TS_CONFIG = "tsconfig.json";
export const TS_CONFIG_BAK = "tsconfig.json.bak";
export const TS_CONFIG_BUILD = "tsconfig.build.json";

export function swap(
  oldPath,
  newPath,
) {
  if (existsSync(join(__dirname, "..", newPath))) {
    unlinkSync(join(__dirname, "..", newPath));
  }
  
  copyFileSync(
    join(__dirname, "..", oldPath),
    join(__dirname, "..", newPath)
  );
}
