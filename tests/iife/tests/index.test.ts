import Fs from "node:fs";
import Path from "node:path";

import { describe, expect, it } from "vitest";

const CWD: string = process.cwd();

const PATH_DIST: string = Path.join(CWD, "dist");

const PATH_INDEX_DEV: string = Path.join(PATH_DIST, "init.development.js");
const PATH_INDEX_PRD: string = Path.join(PATH_DIST, "init.production.js");
const PATH_INDEX_PRD_MIN: string = Path.join(
    PATH_DIST,
    "init.production.min.js",
);

describe("IIFE tests", (): void => {
    it("should have dist", async (): Promise<void> => {
        const isDistExists: boolean = Fs.existsSync(PATH_DIST);

        if (!isDistExists) {
            return expect(isDistExists).toBe(true);
        }
    });

    it("should work in development", async (): Promise<void> => {
        const isIndexExists: boolean = Fs.existsSync(PATH_INDEX_DEV);

        if (!isIndexExists) {
            return expect(isIndexExists).toBe(true);
        }
    });

    it("should work in production", async (): Promise<void> => {
        const isIndexExists: boolean = Fs.existsSync(PATH_INDEX_PRD);

        if (!isIndexExists) {
            return expect(isIndexExists).toBe(true);
        }
    });

    it("should work in production and minify", async (): Promise<void> => {
        const isIndexExists: boolean = Fs.existsSync(PATH_INDEX_PRD_MIN);

        if (!isIndexExists) {
            return expect(isIndexExists).toBe(true);
        }
    });
});
