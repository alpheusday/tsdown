import type { UserConfig } from "tsdown";

/**
 * Default options for `tsdown` configuration.
 */
const OPTIONS_DEFAULT: UserConfig = {
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
};

export { OPTIONS_DEFAULT };
