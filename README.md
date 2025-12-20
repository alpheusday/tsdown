# Alpheus tsdown Configuration

A shareable tsdown configuration.

## Installation

Install this package as a dependency in the project:

```sh
# npm
npm i @apst/tsdown

# Yarn
yarn add @apst/tsdown

# pnpm
pnpm add @apst/tsdown

# Bun
bun add @apst/tsdown
```

## Usage

Implement the preset into `tsdown.config.ts`:

```ts
import { defineConfig } from "@apst/tsdown";
import { 
    esmPreset,
    cjsPreset,
    dtsPreset,
} from "@apst/tsdown/presets";

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

With IIFE output:

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
    noExternal: [
        /** ... */
    ],
};

export default defineConfig([
    esmPreset(options),
    cjsPreset(options),
    dtsPreset(options),
    iifePreset(iifeOptions),
]);
```

## APIs

For the APIs, please refer to the [APIs](./apis/README.md).

## License

This project is licensed under the terms of the MIT license.
