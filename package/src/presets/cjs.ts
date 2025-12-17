import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

/**
 * CommonJS preset.
 *
 * This preset includes the default CommonJS options.
 */
const cjsPreset = (options?: UserConfig): Preset => {
    return ({ options: internalOptions }): PresetResult => {
        const opts: UserConfig = toMerged(internalOptions, options ?? {});

        return {
            options: {
                ...opts,
                format: "cjs",
            },
        };
    };
};

export { cjsPreset };
