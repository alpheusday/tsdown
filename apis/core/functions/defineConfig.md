[@apst/tsdown](../../README.md) / [core](../README.md) / defineConfig

# Function: defineConfig()

## Call Signature

```ts
function defineConfig(presets?): UserConfig[];
```

Defined in: [functions/define.ts:145](https://github.com/alpheusday/tsdown/blob/dea1185874e16b7dc93035207cb8f7e5190036b6/package/src/functions/define.ts#L145)

Define tsdown configuration.

### Example

```ts
import type { UserConfig } from "tsdown";

import { defineConfig } from "@apst/tsdown";
import {
    esmPreset,
    cjsPreset,
    dtsPreset,
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
```

### Parameters

#### presets?

[`Preset`](../../presets/type-aliases/Preset.md)[]

### Returns

`UserConfig`[]

## Call Signature

```ts
function defineConfig(options?, presets?): UserConfig[];
```

Defined in: [functions/define.ts:170](https://github.com/alpheusday/tsdown/blob/dea1185874e16b7dc93035207cb8f7e5190036b6/package/src/functions/define.ts#L170)

Define tsdown configuration.

### Example

```ts
import { defineConfig } from "@apst/tsdown";
import { esmPreset, cjsPreset, dtsPreset } from "@apst/tsdown/presets";

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

### Parameters

#### options?

`UserConfig`

#### presets?

[`Preset`](../../presets/type-aliases/Preset.md)[]

### Returns

`UserConfig`[]
