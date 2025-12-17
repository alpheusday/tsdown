import type { UserConfig } from "tsdown";

/**
 * Preset options.
 */
type PresetOptions = {
    /**
     * Type of the project.
     */
    type: "commonjs" | "module";
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
