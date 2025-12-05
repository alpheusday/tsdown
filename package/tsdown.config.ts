import type { UserConfig } from "tsdown";

import { defineConfig } from "tsdown";

const options: UserConfig = {
    entry: {
        index: "./src/index.ts",
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
    inputOptions: {
        experimental: {
            attachDebugInfo: "none",
        },
    },
};

export default defineConfig([
    {
        ...options,
        format: "esm",
    },
    {
        ...options,
        format: "cjs",
        outputOptions: {
            entryFileNames: ({ name }) => `${name}.js`,
        },
    },
    {
        ...options,
        dts: {
            emitDtsOnly: true,
        },
        outputOptions: {
            entryFileNames: ({ name }) => `${name}.ts`,
        },
    },
]);
