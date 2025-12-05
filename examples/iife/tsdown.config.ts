import { defineConfig } from "@apst/tsdown";
import { iifePreset } from "@apst/tsdown/presets";

export default defineConfig(
    {
        entry: {
            entry: "./src/index.ts",
        },
    },
    [
        iifePreset(),
    ],
);
