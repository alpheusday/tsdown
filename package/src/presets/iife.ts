import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

/**
 * IIFE preset.
 *
 * This preset includes the default IIFE options.
 */
const iifePreset = (options?: UserConfig): Preset => {
    return ({ options: internalOptions }): PresetResult => {
        const optsPreset: UserConfig = {
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
