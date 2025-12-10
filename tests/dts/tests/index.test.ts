import Fs from "node:fs";
import Path from "node:path";

import { describe, expect, it } from "vitest";

const CWD: string = process.cwd();

const PATH_DIST = Path.join(CWD, "dist");

const PATH_INDEX = Path.join(PATH_DIST, "index.d.ts");

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
