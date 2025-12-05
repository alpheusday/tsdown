import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { merge } from "es-toolkit";

const iifePreset = (options?: UserConfig): Preset => {
    return ({ config: internalOptions }): PresetResult => {
        const optsRaw: UserConfig = merge(internalOptions, {
            sourcemap: false,
            minify: true,
            unbundle: false,
            outputOptions: {
                entryFileNames: ({ name }) => `${name}.js`,
            },
        } satisfies UserConfig);

        const opts: UserConfig = merge(optsRaw, options ?? {});

        return {
            key: "iife",
            config: {
                ...opts,
                format: "iife",
            },
        };
    };
};

export { iifePreset };
