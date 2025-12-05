import type { UserConfig } from "tsdown";

const DEFAULT_OPTIONS: UserConfig = {
    dts: false,
    outDir: "./dist",
    clean: true,
    platform: "neutral",
    treeshake: true,
    sourcemap: true,
    minify: false,
    shims: true,
    unbundle: true,
    inputOptions: {
        experimental: {
            attachDebugInfo: "none",
        },
    },
};

export { DEFAULT_OPTIONS };
