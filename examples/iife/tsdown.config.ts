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

const iifeDevOptions: UserConfig = {
    entry: {
        init: "./src/init.ts",
    },
};

const iifePrdOptions: UserConfig = {
    entry: {
        "init.min": "./src/init.ts",
    },
    minify: true,
};

export default defineConfig([
    esmPreset(options),
    cjsPreset(options),
    dtsPreset(options),
    iifePreset(iifeDevOptions),
    iifePreset(iifePrdOptions),
]);
