import type { UserConfig } from "tsdown";

/**
 * Preset options.
 */
type PresetOptions = {
    /**
     * Options.
     */
    options: UserConfig;
};

/**
 * Preset result.
 */
type PresetResult = {
    /**
     * Options.
     */
    options?: UserConfig | UserConfig[];
};

/**
 * Preset for the build.
 */
type Preset = (options: PresetOptions) => PresetResult;

export type { PresetOptions, PresetResult, Preset };
