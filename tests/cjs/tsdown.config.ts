import { defineConfig } from "@apst/tsdown";
import { cjsPreset } from "@apst/tsdown/presets";

export default defineConfig(
    {
        entry: {
            index: "./src/index.ts",
        },
    },
    [
        cjsPreset(),
    ],
);
