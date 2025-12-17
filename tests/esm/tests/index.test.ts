import Fs from "node:fs";
import Path from "node:path";

import { describe, expect, it } from "vitest";

const CWD: string = process.cwd();

const PATH_DIST: string = Path.join(CWD, "dist");

const PATH_INDEX: string = Path.join(PATH_DIST, "index.js");

describe("ESModule tests", (): void => {
    it("should work", async (): Promise<void> => {
        const isDistExists: boolean = Fs.existsSync(PATH_DIST);

        if (!isDistExists) {
            return expect(isDistExists).toBe(true);
        }

        const isIndexExists: boolean = Fs.existsSync(PATH_INDEX);

        if (!isIndexExists) {
            return expect(isIndexExists).toBe(true);
        }

        const isMapExists: boolean = Fs.existsSync(`${PATH_INDEX}.map`);

        if (!isMapExists) {
            return expect(isMapExists).toBe(true);
        }
    });
});
