import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

/**
 * DTS preset.
 *
 * This preset includes the default DTS options.
 */
const dtsPreset = (options?: UserConfig): Preset => {
    return ({ options: internalOptions }): PresetResult => {
        const optsPreset: UserConfig = {
            dts: {
                emitDtsOnly: true,
                compilerOptions: {
                    isolatedDeclarations: true,
                },
            },
            // always output .d.ts
            outputOptions: {
                entryFileNames: ({ name }) => `${name}.ts`,
                chunkFileNames: ({ name }) => `${name}.ts`,
            },
        };

        const optsBase: UserConfig = toMerged(internalOptions, optsPreset);

        const opts: UserConfig = toMerged(optsBase, options ?? {});

        return {
            options: opts,
        };
    };
};

export { dtsPreset };
