import type { UserConfig } from "tsdown";

type PresetOptions = {
    type: "commonjs" | "module";
    config: UserConfig;
};

type PresetKey = "esm" | "cjs" | "dts" | "iife";

type PresetResult = {
    key: PresetKey;
    config: UserConfig;
};

type Preset = (options: PresetOptions) => PresetResult;

export type { PresetOptions, PresetKey, PresetResult, Preset };
