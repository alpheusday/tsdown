import type { UserConfig } from "tsdown";

import Fs from "node:fs";
import Path from "node:path";

import { defineConfig } from "@apst/tsdown";
import { dtsPreset } from "@apst/tsdown/presets";
import { build } from "tsdown";
import { beforeAll, describe, expect, it } from "vitest";

const CWD: string = process.cwd();

const PATH_DIST: string = Path.join(CWD, "dist");

const PATH_INDEX: string = Path.join(PATH_DIST, "index.d.ts");

beforeAll(async (): Promise<void> => {
    const configs: UserConfig[] = defineConfig(
        {
            entry: {
                index: "./src/index.ts",
            },
        },
        [
            dtsPreset(),
        ],
    );

    for (const config of configs) {
        await build(config);
    }
});

describe("DTS tests", (): void => {
    it("should work", async (): Promise<void> => {
        const isDistExists: boolean = Fs.existsSync(PATH_DIST);

        if (!isDistExists) {
            return expect(isDistExists).toBe(true);
        }

        const isIndexExists: boolean = Fs.existsSync(PATH_INDEX);

        if (!isIndexExists) {
            return expect(isIndexExists).toBe(true);
        }
    });
});
