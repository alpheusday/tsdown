set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
biome := node_bin + "biome"
tsc := node_bin + "tsc"
tsdown := node_bin + "tsdown"
vitest := node_bin + "vitest"
typedoc := node_bin + "typedoc"

example_cjs := "examples/cjs"
example_esm := "examples/esm"
example_iife := "examples/iife"

# Default action
_:
    just lint
    just fmt
    just build
    just test

# Install
i:
    pnpm install

# Lint with TypeScript Compiler
tsc:
    cd ./package && ../{{tsc}} --noEmit

# Lint code
lint:
    ls-lint
    typos
    just tsc

# Format code
fmt:
    ./{{biome}} check --write .

# Build package
build:
    cd ./package && ../{{tsdown}} -c tsdown.config.ts

# Run tests
test:
    cd ./test && ./{{vitest}} run

# Run tests with different runtimes
test-all:
    cd ./test && pnpm run test
    cd ./test && deno run test
    cd ./test && bun run test

example-cjs:
    cd ./{{example_cjs}} && ../../{{tsdown}} -c tsdown.config.ts

example-esm:
    cd ./{{example_esm}} && ../../{{tsdown}} -c tsdown.config.ts

example-iife:
    cd ./{{example_iife}} && ../../{{tsdown}} -c tsdown.config.ts

# Generate APIs documentation
api:
    cd ./package && ../{{typedoc}}

# Clean builds
clean:
    rm -rf ./package/dist

# Clean everything
clean-all:
    rm -rf ./node_modules
    rm -rf ./package/node_modules
    just clean
