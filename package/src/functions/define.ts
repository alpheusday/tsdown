import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";
import { defineConfig as _defineConfig } from "tsdown";

import { OPTIONS_DEFAULT } from "#/constants";

const processPresetResults = (presetResults: PresetResult[]): UserConfig[] => {
    const result: UserConfig[] = [];

    for (const presetResult of presetResults) {
        // undefined
        if (!presetResult.options) continue;

        // array
        if (Array.isArray(presetResult.options)) {
            for (const opts of presetResult.options) {
                result.push(opts);
            }
        }

        // object
        else {
            result.push(presetResult.options);
        }
    }

    return result;
};

const defineConfigFn = (
    options?: UserConfig,
    presets?: Preset[],
): UserConfig[] => {
    const opts: UserConfig = toMerged(OPTIONS_DEFAULT, options ?? {});

    if (!presets)
        return _defineConfig([
            opts,
        ]);

    const presetResults: PresetResult[] = [];

    for (const preset of presets) {
        const presetResult: PresetResult = preset({
            options: opts,
        });

        presetResults.push(presetResult);
    }

    return _defineConfig(processPresetResults(presetResults));
};

/**
 * Define tsdown configuration.
 *
 * ### Example
 *
 * ```ts
 * import type { UserConfig } from "tsdown";
 *
 * import { defineConfig } from "@apst/tsdown";
 * import {
 *     esmPreset,
 *     cjsPreset,
 *     dtsPreset,
 *     iifePreset,
 * } from "@apst/tsdown/presets";
 *
 * const options: UserConfig = {
 *     entry: {
 *         index: "./src/index.ts",
 *     },
 * };
 *
 * const iifeOptions: UserConfig = {
 *     entry: {
 *         init: "./src/init.ts",
 *     },
 * };
 *
 * export default defineConfig([
 *     esmPreset(options),
 *     cjsPreset(options),
 *     dtsPreset(options),
 *     iifePreset(iifeOptions),
 * ]);
 * ```
 */
function defineConfig(presets?: Preset[]): UserConfig[];

/**
 * Define tsdown configuration.
 *
 * ### Example
 *
 * ```ts
 * import { defineConfig } from "@apst/tsdown";
 * import { esmPreset, cjsPreset, dtsPreset } from "@apst/tsdown/presets";
 *
 * export default defineConfig(
 *     {
 *         entry: {
 *             index: "./src/index.ts",
 *         },
 *     },
 *     [
 *         esmPreset(),
 *         cjsPreset(),
 *         dtsPreset(),
 *     ],
 * );
 * ```
 */
function defineConfig(options?: UserConfig, presets?: Preset[]): UserConfig[];

function defineConfig(
    presetsOrOptions?: Preset[] | UserConfig,
    optionalPresets?: Preset[],
): UserConfig[] {
    try {
        const options: UserConfig | undefined = Array.isArray(presetsOrOptions)
            ? void 0
            : presetsOrOptions;

        const presets: Preset[] | undefined = Array.isArray(presetsOrOptions)
            ? presetsOrOptions
            : optionalPresets;

        return defineConfigFn(options, presets);
    } catch (err: unknown) {
        console.error(err);
        throw err;
    }
}

export { defineConfig };
