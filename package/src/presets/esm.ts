import type {
    OutExtensionContext,
    OutExtensionObject,
    UserConfig,
} from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

type CompleteExtraOptionsESM = {
    /**
     * Whether to use a fixed extension for the output files.
     *
     * If `true`, all output files will use the `.mjs` extension regardless anything else.
     *
     * By default, it is `false`.
     */
    fixedExtension: boolean;
};

/**
 * Extra options for the ESM preset.
 */
type ExtraOptionsESM = Partial<CompleteExtraOptionsESM>;

/**
 * Options for the ESModule preset.
 */
type PresetOptionsESM = UserConfig & {
    /**
     * Preset-specific options.
     */
    presetOptions?: ExtraOptionsESM;
};

/**
 * ESModule preset.
 *
 * This preset includes the default ESModule options.
 */
const esmPreset = (options?: PresetOptionsESM): Preset => {
    const { presetOptions, ...optionsRest } = options ?? {};

    return ({ options: internalOptions }): PresetResult => {
        const optsBase: UserConfig = toMerged(internalOptions, {
            outExtensions: ({
                pkgType,
            }: OutExtensionContext): OutExtensionObject => {
                // Fixed extension
                if (presetOptions?.fixedExtension) {
                    return {
                        js: ".mjs",
                    };
                }

                // ESM file in ESM project
                if (pkgType === "module") {
                    return {
                        js: ".js",
                    };
                }

                // ESM file in ESM project
                return {
                    js: ".mjs",
                };
            },
        } satisfies UserConfig);

        const opts: UserConfig = toMerged(optsBase, optionsRest ?? {});

        return {
            options: {
                ...opts,
                format: "esm",
            },
        };
    };
};

export type { PresetOptionsESM, ExtraOptionsESM };
export { esmPreset };
