import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

const dtsPreset = (options?: UserConfig): Preset => {
    return ({ config: internalOptions }): PresetResult => {
        const optsRaw: UserConfig = toMerged(internalOptions, {
            dts: {
                emitDtsOnly: true,
            },
            outputOptions: {
                entryFileNames: ({ name }) => `${name}.ts`,
            },
        } satisfies UserConfig);

        const opts: UserConfig = toMerged(optsRaw, options ?? {});

        return {
            key: "dts",
            config: {
                ...opts,
            },
        };
    };
};

export { dtsPreset };
