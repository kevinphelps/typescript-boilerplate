# typescript-boilerplate
Yet another TypeScript starter.

## Features
- TypeScript compilation.
- TSLint configuration.
- Jasmine tests in `*.spec.ts` files.
- Remapped code coverge.
- Travic CI configuration.

## Getting Started
- Clone this repo.
- Copy the files to your project.
- Run `yarn --pure-lockfile` to install dependencies.
- Replace `typescript-boilerplate` with your project name in all files (and rename files).
- Add your code and write tests.
- Ship it! (`npm publish`)

## Build Commands
- `yarn run build`: clean, lint, build, and test
- `yarn run build [--no-clean] [--no-lint] [--no-test]`: build as above skipping the given steps
- `yarn run build --watch`: clean, build and watch
