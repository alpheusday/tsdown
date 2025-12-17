import type {
    OutExtensionContext,
    OutExtensionObject,
    UserConfig,
} from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import { toMerged } from "es-toolkit";

type CompleteExtraOptionsCJS = {
    /**
     * Whether to use a fixed extension for the output files.
     *
     * If `true`, all output files will use the `.cjs` extension regardless anything else.
     *
     * By default, it is `false`.
     */
    fixedExtension: boolean;
};

/**
 * Extra options for the CJS preset.
 */
type ExtraOptionsCJS = Partial<CompleteExtraOptionsCJS>;

/**
 * Options for the CommonJS preset.
 */
type PresetOptionsCJS = UserConfig & {
    presetOptions?: ExtraOptionsCJS;
};

/**
 * CommonJS preset.
 *
 * This preset includes the default CommonJS options.
 */
const cjsPreset = (options?: PresetOptionsCJS): Preset => {
    const { presetOptions, ...optionsRest } = options ?? {};

    return ({ options: internalOptions }): PresetResult => {
        const optsBase: UserConfig = toMerged(internalOptions, {
            outExtensions: ({
                pkgType,
            }: OutExtensionContext): OutExtensionObject => {
                // Fixed extension
                if (presetOptions?.fixedExtension) {
                    return {
                        js: ".cjs",
                    };
                }

                // CJS file in ESM project
                if (pkgType === "module") {
                    return {
                        js: ".cjs",
                    };
                }

                // CJS file in CJS project
                return {
                    js: ".js",
                };
            },
        } satisfies UserConfig);

        const opts: UserConfig = toMerged(optsBase, optionsRest ?? {});

        return {
            options: {
                ...opts,
                format: "cjs",
            },
        };
    };
};

export type { PresetOptionsCJS, ExtraOptionsCJS };
export { cjsPreset };
