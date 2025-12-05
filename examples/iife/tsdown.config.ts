import type { UserConfig } from "tsdown";

import { defineConfig } from "@apst/tsdown";
import {
    cjsPreset,
    dtsPreset,
    esmPreset,
    iifePreset,
} from "@apst/tsdown/presets";

const options: UserConfig = {
    entry: {
        index: "./src/index.ts",
    },
};

export default defineConfig([
    // @ts-expect-error
    esmPreset(options),
    // @ts-expect-error
    cjsPreset(options),
    // @ts-expect-error
    dtsPreset(options),
    iifePreset({
        entry: {
            init: "./src/init.ts",
        },
    }),
]);
