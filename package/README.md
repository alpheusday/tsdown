# tsdown Configuration

A shareable tsdown configuration.

## Usage

Implement the preset into `tsdown.config.ts`:

```ts
import { defineConfig } from "@apst/tsdown";
import { esmPreset, cjsPreset, dtsPreset } from "@apst/tsdown";

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
```

For IIFE builds:

```ts
import { defineConfig } from "@apst/tsdown";
import { iifePreset } from "@apst/tsdown";

export default defineConfig(
    {
        entry: {
            index: "./src/index.ts",
        },
    },
    [
        iifePreset({
            noExternal: [
                /** ... */
            ],
        }),
    ],
);
```

## License

This project is licensed under the terms of the MIT license.
