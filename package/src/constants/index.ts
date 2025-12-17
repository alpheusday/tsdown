import type { UserConfig } from "tsdown";

/**
 * Default options for `tsdown`.
 */
const OPTIONS_DEFAULT = {
    dts: false,
    outDir: "./dist",
    clean: true,
    platform: "neutral",
    treeshake: true,
    sourcemap: true,
    minify: false,
    shims: true,
    unbundle: true,
    hash: false,
    inputOptions: {
        experimental: {
            attachDebugInfo: "none",
        },
    },
} as const satisfies UserConfig;

export { OPTIONS_DEFAULT };
