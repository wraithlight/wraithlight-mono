import { KnipConfig } from "knip";

const config: KnipConfig = {
    ignore: [
        "**/dist/**",
        "**/coverage/**",
        "vsc/**",
        ".scripts/**",
        "**/vite-env.d.ts"
    ],
    workspaces: {
        ".": {
            ignore: [
                "webpack.config.js",
                "webpack.package.config.js",
                ".eslintrc.cjs",
                "jest.config.js"
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
        }
    }
}

export default config;
