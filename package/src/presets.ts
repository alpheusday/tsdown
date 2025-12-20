/**
 * Presets module
 * @module presets
 */

export type {
    Preset,
    PresetOptions,
    PresetResult,
} from "#/@types/preset";
export type { ExtraOptionsCJS, PresetOptionsCJS } from "#/presets/cjs";
export type { ExtraOptionsDTS, PresetOptionsDTS } from "#/presets/dts";
export type { ExtraOptionsESM, PresetOptionsESM } from "#/presets/esm";
export type { PresetOptionsIIFE } from "#/presets/iife";

export { blankPreset } from "#/presets/blank";
export { cjsPreset } from "#/presets/cjs";
export { defaultPreset } from "#/presets/default";
export { dtsPreset } from "#/presets/dts";
export { esmPreset } from "#/presets/esm";
export { iifePreset } from "#/presets/iife";
