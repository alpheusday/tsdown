import type { UserConfig } from "tsdown";

import { defineConfig } from "@apst/tsdown";
import { iifePreset } from "@apst/tsdown/presets";

const iifeDevOptions: UserConfig = {
    entry: {
        "init.development": "./src/init.ts",
    },
};

const iifePrdOptions: UserConfig = {
    entry: {
        "init.production": "./src/init.ts",
    },
};

const iifePrdMinOptions: UserConfig = {
    entry: {
        "init.production.min": "./src/init.ts",
    },
    minify: true,
};

export default defineConfig([
    iifePreset(iifeDevOptions),
    iifePreset(iifePrdOptions),
    iifePreset(iifePrdMinOptions),
]);
