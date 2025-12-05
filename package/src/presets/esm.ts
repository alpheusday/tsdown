import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

const esmPreset = (options?: UserConfig): Preset => {
    return ({ type, config: internalOptions }): PresetResult => {
        const optsRaw: UserConfig = toMerged(internalOptions, {
            outputOptions: {
                ...(type === "module"
                    ? {
                          entryFileNames: ({ name }) => `${name}.js`,
                      }
                    : {}),
            },
        } satisfies UserConfig);

        const opts: UserConfig = toMerged(optsRaw, options ?? {});

        return {
            key: "esm",
            config: {
                ...opts,
                format: "esm",
            },
        };
    };
};

export { esmPreset };
