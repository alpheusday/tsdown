import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

/**
 * Blank preset.
 *
 * This preset does not include any default options.
 */
const blankPreset = (options?: UserConfig): Preset => {
    return (): PresetResult => {
        return {
            options,
        };
    };
};

export { blankPreset };
