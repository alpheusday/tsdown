import type { OutExtensionObject, UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

type CompleteExtraOptionsDTS = {
    /**
     * Whether optimize for the performance.
     *
     * This option may cause error sometimes.
     *
     * By default, it is `false`.
     */
    performanceMode: boolean;
};

/**
 * Extra options for the DTS preset.
 */
type ExtraOptionsDTS = Partial<CompleteExtraOptionsDTS>;

/**
 * Options for the DTS preset.
 */
type PresetOptionsDTS = UserConfig & {
    /**
     * Preset-specific options.
     */
    presetOptions?: ExtraOptionsDTS;
};

/**
 * DTS preset.
 *
 * This preset includes the default DTS options.
 */
const dtsPreset = (options?: PresetOptionsDTS): Preset => {
    const { presetOptions, ...optionsRest } = options ?? {};

    return ({ options: internalOptions }): PresetResult => {
        const optsPreset: UserConfig = {
            dts: {
                emitDtsOnly: true,
                compilerOptions: {
                    // whether enable oxc-transform
                    ...(presetOptions?.performanceMode
                        ? {
                              isolatedDeclarations: true,
                          }
                        : {}),
                },
            },
            // always output .d.ts
            outExtensions: (): OutExtensionObject => {
                return {
                    dts: ".ts",
                };
            },
        };

        const optsBase: UserConfig = toMerged(internalOptions, optsPreset);

        const opts: UserConfig = toMerged(optsBase, optionsRest ?? {});

        return {
            options: opts,
        };
    };
};

export type { ExtraOptionsDTS, PresetOptionsDTS };
export { dtsPreset };
