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
                "webpack.package.config.js",
                ".eslintrc.cjs",
                "jest.config.js"
            ],
            ignoreDependencies: [
                "@wraithlight/tools.eslint.base"
            ]
        },
        "apps/auth/node": {
            ignoreDependencies: [
                "ts-node"
            ]
        },
        "apps/game-website/node": {
            ignoreDependencies: [
                "ts-node"
            ]
        },
        "apps/auth/ui": {
            entry: [
                "src/main.ts",
                "src/App.svelte"
            ],
            ignore: [
                "src/app.ts"
            ],
            ignoreDependencies: [
                "@tsconfig/svelte",
                "svelte-navigator",
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
                "@angular-devkit/build-angular",
                "@angular/compiler-cli",
                "jest-preset-angular",
                "ts-node"
            ]
        },
        "packages/tools/tools.eslint.base": {
            ignore: [
                "src/.eslintrc.cjs"
            ],
            ignoreBinaries: [
                // TODO: This might cause issues in Windows environments.
                "rsync"
            ]
        }
    }
}

export default config;
