import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

const blankPreset = (options?: UserConfig): Preset => {
    return (): PresetResult => {
        return {
            options: options ?? {},
        };
    };
};

export { blankPreset };
