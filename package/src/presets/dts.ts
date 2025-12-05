import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { merge } from "es-toolkit";

const dtsPreset = (options?: UserConfig): Preset => {
    return ({ config: internalOptions }): PresetResult => {
        const optsRaw: UserConfig = merge(internalOptions, {
            dts: {
                emitDtsOnly: true,
            },
            outputOptions: {
                entryFileNames: ({ name }) => `${name}.ts`,
            },
        } satisfies UserConfig);

        const opts: UserConfig = merge(optsRaw, options ?? {});

        return {
            key: "dts",
            config: {
                ...opts,
            },
        };
    };
};

export { dtsPreset };
