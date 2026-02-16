import type { OutExtensionObject, UserConfig } from "../node_modules/tsdown";

import { defineConfig } from "tsdown";

const options: UserConfig = {
    entry: {
        index: "./src/index.ts",
        presets: "./src/presets.ts",
    },
    dts: false,
    outDir: "./dist",
    clean: true,
    platform: "node",
    treeshake: true,
    sourcemap: true,
    minify: false,
    shims: true,
    unbundle: false,
    hash: false,
    inputOptions: {
        experimental: {
            attachDebugInfo: "none",
        },
    },
};

export default defineConfig([
    // @ts-expect-error
    {
        ...options,
        format: "esm",
        outExtensions: (): OutExtensionObject => ({
            js: ".mjs",
        }),
    },
    // @ts-expect-error
    {
        ...options,
        format: "cjs",
        outExtensions: (): OutExtensionObject => ({
            js: ".js",
        }),
    },
    // @ts-expect-error
    {
        ...options,
        dts: {
            emitDtsOnly: true,
        },
        outExtensions: (): OutExtensionObject => ({
            dts: ".ts",
        }),
    },
]);
