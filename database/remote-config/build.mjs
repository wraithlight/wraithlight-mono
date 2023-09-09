import { dirname, join } from "path";
import { fileURLToPath } from 'url';

import { build } from "../.build/build.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const databaseName = process.argv[3];

build(
    join(__dirname, "src"),
    databaseName
);
