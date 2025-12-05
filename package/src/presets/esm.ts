import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

const esmPreset = (options?: UserConfig): Preset => {
    return ({ type, options: internalOptions }): PresetResult => {
        const optsPreset: UserConfig = {
            outputOptions: {
                ...(type === "module"
                    ? {
                          entryFileNames: ({ name }) => `${name}.js`,
                          chunkFileNames: ({ name }) => `${name}.js`,
                      }
                    : {}),
            },
        };

        const optsBase: UserConfig = toMerged(internalOptions, optsPreset);

        const opts: UserConfig = toMerged(optsBase, options ?? {});

        return {
            options: {
                ...opts,
                format: "esm",
            },
        };
    };
};

export { esmPreset };
