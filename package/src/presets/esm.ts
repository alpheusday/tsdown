import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { merge } from "es-toolkit";

const esmPreset = (options?: UserConfig): Preset => {
    return ({ type, config: internalOptions }): PresetResult => {
        const optsRaw: UserConfig = merge(internalOptions, {
            outputOptions: {
                ...(type === "module"
                    ? {
                          entryFileNames: ({ name }) => `${name}.js`,
                      }
                    : {}),
            },
        } satisfies UserConfig);

        const opts: UserConfig = merge(optsRaw, options ?? {});

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
