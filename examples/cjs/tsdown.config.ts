import { cjsPreset, defineConfig, dtsPreset, esmPreset } from "@apst/tsdown";

export default defineConfig(
    {
        entry: {
            index: "./src/index.ts",
        },
    },
    [
        esmPreset(),
        cjsPreset(),
        dtsPreset(),
    ],
);
