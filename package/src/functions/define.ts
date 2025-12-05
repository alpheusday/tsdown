import type { ResolveResult } from "oxc-resolver";
import type { UserConfig } from "tsdown";

import type { Preset, PresetResult } from "#/@types/preset";

import * as Fs from "node:fs";

import { toMerged } from "es-toolkit";
import { ResolverFactory } from "oxc-resolver";
import { defineConfig as _defineConfig } from "tsdown";

import { OPTIONS_DEFAULT } from "#/constants";

type PackageJson = {
    type?: "commonjs" | "module";
};

const ENTRY_DEFAULT = "./src/index.ts" as const;

const resolveEntry = (
    entry?: string | string[] | Record<string, string>,
): string => {
    if (!entry) return ENTRY_DEFAULT;
    if (typeof entry === "string") return entry;
    if (Array.isArray(entry)) return entry[0] ?? ENTRY_DEFAULT;
    return Object.values(entry)[0] ?? ENTRY_DEFAULT;
};

type ResolvePackageJsonPathOptions = {
    cwd: string;
    entry: string;
};

const resolvePackageJsonPath = (
    options: ResolvePackageJsonPathOptions,
): string | undefined => {
    const resolver: ResolverFactory = new ResolverFactory();
    const result: ResolveResult = resolver.sync(options.cwd, options.entry);
    return result.packageJsonPath;
};

const resolvePackageJson = (
    options: ResolvePackageJsonPathOptions,
): PackageJson | undefined => {
    const pkgJsonPath: string | undefined = resolvePackageJsonPath(options);
    if (!pkgJsonPath) return void 0;
    return JSON.parse(Fs.readFileSync(pkgJsonPath, "utf-8"));
};

const processPresetResults = (presetResults: PresetResult[]): UserConfig[] => {
    const result: UserConfig[] = [];

    for (const presetResult of presetResults) {
        result.push(presetResult.options);
    }

    return result;
};

const defineConfigFn = (
    options?: UserConfig,
    presets?: Preset[],
): UserConfig[] => {
    const opts: UserConfig = toMerged(OPTIONS_DEFAULT, options ?? {});

    const presetResults: PresetResult[] = [];

    const pkgJson: PackageJson | undefined = resolvePackageJson({
        cwd: opts.cwd ?? process.cwd(),
        entry: resolveEntry(opts.entry),
    });

    if (!presets || !pkgJson)
        return [
            _defineConfig(opts),
        ];

    const isESM: boolean = pkgJson.type === "module";

    for (const preset of presets) {
        const presetResult: PresetResult = preset({
            type: isESM ? "module" : "commonjs",
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
