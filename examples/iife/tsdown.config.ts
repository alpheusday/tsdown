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

const iifeOptions: UserConfig = {
    entry: {
        init: "./src/init.ts",
    },
};

export default defineConfig([
    esmPreset(options),
    cjsPreset(options),
    dtsPreset(options),
    iifePreset(iifeOptions),
]);
