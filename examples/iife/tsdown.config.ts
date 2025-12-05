import { defineConfig, iifePreset } from "@apst/tsdown";

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
