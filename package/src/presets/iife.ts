import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

const iifePreset = (options?: UserConfig): Preset => {
    return ({ options: internalOptions }): PresetResult => {
        const optsPreset: UserConfig = {
            sourcemap: false,
            minify: true,
            unbundle: false,
            outputOptions: {
                entryFileNames: ({ name }) => `${name}.js`,
            },
        };

        const optsBase: UserConfig = toMerged(internalOptions, optsPreset);

        const opts: UserConfig = toMerged(optsBase, options ?? {});

        return {
            options: {
                ...opts,
                format: "iife",
            },
        };
    };
};

export { iifePreset };
