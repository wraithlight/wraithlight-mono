const { resolve } = require("path");

const config = (env) => {
    const isProduction = env.production;
    const filename = "node.js";
    const cfg = {
        mode: isProduction ? "production" : "development",
        entry: [
            "./src/main.ts"
        ],
        output: {
            path: resolve(__dirname, "../dist/node"),
            filename,
            clean: true
        },
        target: "node",
        node: {
            __dirname: false,
            __filename: false,
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                },
            ]
        },
        resolve: {
            extensions: [".ts", ".js"]
        }
    };
    return cfg;
};

module.exports = config;
