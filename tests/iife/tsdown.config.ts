import { defineConfig } from "@apst/tsdown";
import { iifePreset } from "@apst/tsdown/presets";

export default defineConfig(
    {
        entry: {
            init: "./src/init.ts",
        },
    },
    [
        iifePreset(),
    ],
);
