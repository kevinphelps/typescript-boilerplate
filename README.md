# typescript-boilerplate
Yet another TypeScript starter.

## Features
- TypeScript compilation.
- TSLint configuration.
- Jasmine tests in `*.spec.ts` files.
- Remapped code coverge.
- Travic CI configuration.

## Getting Started
1. Clone this repo.
2. Copy the files to your project.
3. Run `yarn --pure-lockfile` to install dependencies.
4. Replace `typescript-boilerplate` with your project name in all files (and rename files).
5. Add your code and write tests.
6. Ship it! (`npm publish`)

## Build Commands
- `yarn run build`: clean, lint, build, and test
- `yarn run build --watch`: clean, build and watch
- `yarn run build [--no-clean] [--no-lint] [--no-test]`: build skipping the given steps
- `yarn run lint [--fix]`: run tslint and optionally apply an autofixes
