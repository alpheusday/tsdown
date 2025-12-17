import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

const defaultPreset = (options?: UserConfig): Preset => {
    return ({ options: internalOptions }): PresetResult => {
        const opts: UserConfig = toMerged(internalOptions, options ?? {});

        return {
            options: opts,
        };
    };
};

export { defaultPreset };
