import config from "@wraithlight/tools.jest.base";
import { dirname, join } from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default config(
  {
    preset: "ts-jest",
    displayName: "Apps/Auth/UI",
    testMatch: [
      "<rootDir>/src/**/*.spec.ts"
    ],
    testPathIgnorePatterns: [
      "dist"
    ],
    coveragePathIgnorePatterns: [
      "dist"
    ],
    transform: {
      '.ts': ['ts-jest', { tsconfig: join(__dirname, 'tsconfig.jest.json') }]
    }
  },
  join(__dirname, "../../..")
);
