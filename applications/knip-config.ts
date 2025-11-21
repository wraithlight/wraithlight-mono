import { KnipConfig } from "knip";

const config: KnipConfig = {
  ignore: [
    "**/dist/**",
    "**/coverage/**",
    "vsc/**",
    ".scripts/**",
    "**/vite-env.d.ts",
    "**/__mocks__/**"
  ],
  workspaces: {
    ".": {
      ignore: [
        "webpack.config.js",
        "jest-mono.config.js"
      ],
      ignoreBinaries: [
        "wc"
      ],
      ignoreDependencies: [
        "@types/jest" // TODO: Move to pkg layer.
      ]
    },
    "apps/user-management/node": {
      ignoreDependencies: [
        "ts-node"
      ],
      ignore: [
        "src/manager/account/account.const.ts"
      ]
    },
    "apps/game-website/node": {
      ignoreDependencies: [
        "ts-node"
      ]
    },
    "apps/game-website/ui": {
      entry: [
        "src/app/app.component.html.ts",
        "src/app/component/body/body.component.html.ts",
        "src/app/component/header/header.component.html.ts"
      ]
    },
    "apps/user-management/ui": {
      entry: [
        // TODO: Remove this once the processor is ready.
        "src/core/index.ts",
        "src/main.ts",
        "src/App.svelte"
      ],
      ignore: [
        "src/app.ts"
      ],
      ignoreDependencies: [
        "@tsconfig/svelte",
        "tslib"
      ]
    },
    "apps/content/node": {
      ignoreDependencies: [
        "ts-node"
      ]
    },
    "apps/editor/node": {
      ignoreDependencies: [
        "ts-node"
      ]
    },
    "apps/logs/node": {
      ignoreDependencies: [
        "ts-node"
      ]
    },
    "apps/notifier/node": {
      ignoreDependencies: [
        "ts-node"
      ]
    },
    "apps/website/node": {
      ignoreDependencies: [
        "ts-node"
      ]
    },
    "apps/remote-config/node": {
      ignoreDependencies: [
        "ts-node"
      ]
    },
    "apps/website/ui": {
      ignoreDependencies: [
        "@angular/compiler-cli",
        "jest-preset-angular",
        "ts-node"
      ]
    },
    "packages/tools/tools.eslint.base": {
      ignore: [
        "src/.eslintrc.cjs"
      ]
    },
    "packages/tools/tools.jest.base": {
      ignore: [
        "src/jest.config.js"
      ]
    },
    "packages/tools/tools.webpack.base": {
      ignore: [
        "src/webpack.config.js"
      ]
    },
    "packages/tools/tools.package-json-copy.base": {
      ignore: [
        "src/package-json-copy.js"
      ]
    },
    "packages/tools/tools.fcopy.base": {
      ignore: [
        "src/fcopy.js"
      ]
    },
    "packages/tools/tools.jest-runner": {
      ignore: [
        "src/jest-runner.js"
      ]
    },
    "packages/ui/core.ui.base-components": {
      ignoreDependencies: [
        "rimraf"  // TODO: ui lib package.json schema
      ]
    },
    "poc/realtime": {
      entry: [
        "src/server.ts",
        "src/client-a.ts",
        "src/client-b.ts"
      ]
    }
  }
};

export default config;
