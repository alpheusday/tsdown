set shell := ["bash", "-cu"]
set windows-shell := ["pwsh", "-Command"]

node_bin := "node_modules/.bin/"
biome := node_bin + "biome"
tsc := node_bin + "tsc"
tsdown := node_bin + "tsdown"
vitest := node_bin + "vitest"
typedoc := node_bin + "typedoc"

pkg := "package"

test_cjs := "tests/cjs"
test_esm := "tests/esm"
test_dts := "tests/dts"
test_iife := "tests/iife"

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

# Lint code with Biome
lint-biome:
    ./{{biome}} lint .

# Format code
fmt:
    ./{{biome}} check --write .

# Build package
build:
    cd ./{{pkg}} && ../{{tsdown}} -c tsdown.config.ts

# Run tests
test:
    cd ./{{test_cjs}} && ./{{vitest}} run
    cd ./{{test_esm}} && ./{{vitest}} run
    cd ./{{test_dts}} && ./{{vitest}} run
    cd ./{{test_iife}} && ./{{vitest}} run

# Run tests with different runtimes
test-all:
    cd ./{{test_cjs}} && pnpm run test
    cd ./{{test_cjs}} && bun run test

    cd ./{{test_esm}} && pnpm run test
    cd ./{{test_esm}} && bun run test
    cd ./{{test_dts}} && pnpm run test
    cd ./{{test_dts}} && bun run test

    cd ./{{test_iife}} && pnpm run test
    cd ./{{test_iife}} && bun run test

example-cjs:
    cd ./{{example_cjs}} && ./{{tsdown}} -c tsdown.config.ts

example-esm:
    cd ./{{example_esm}} && ./{{tsdown}} -c tsdown.config.ts

example-iife:
    cd ./{{example_iife}} && ./{{tsdown}} -c tsdown.config.ts

# Generate APIs documentation
api:
    cd ./{{pkg}} && ../{{typedoc}}

# Publish package with dev tag as dry-run
publish-dev-try:
    cd ./{{pkg}} && pnpm publish --no-git-checks --tag dev --dry-run

# Publish package with dev tag
publish-dev:
    cd ./{{pkg}} && pnpm publish --no-git-checks --tag dev

# Publish package as dry-run
publish-try:
    cd ./{{pkg}} && pnpm publish --dry-run

# Publish package
publish:
    cd ./{{pkg}} && pnpm publish

# Clean builds
clean:
    rm -rf ./{{pkg}}/dist

# Clean everything
clean-all:
    rm -rf ./node_modules
    rm -rf ./{{pkg}}/node_modules
    just clean
