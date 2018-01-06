# typescript-boilerplate
[![Build Status](https://api.travis-ci.org/kevinphelps/typescript-boilerplate.svg?branch=master)](https://travis-ci.org/kevinphelps/typescript-boilerplate)
[![codecov](https://codecov.io/gh/kevinphelps/typescript-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/kevinphelps/typescript-boilerplate)

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
- `yarn run lint [--fix]`: run tslint and optionally apply an autofixes
- `yarn run build`: clean, lint, build, and test
- `yarn run build --watch`: clean, build and watch
- `yarn run build [--no-clean] [--no-lint] [--no-test]`: build skipping the given steps
- `yarn run test`: run unit and e2e tests
- `yarn run test --unit`: run unit tests
- `yarn run test --e2e`: run e2e tests

## Staying up-to-date with this starter

First, run `git remote add boilerplate https://github.com/kevinphelps/typescript-boilerplate.git`.
You only need to do this once.

Now you can cherry-pick commits from this repo to your project.
1. Run `git fetch boilerplate` to fetch boilerplate commits.
2. Run `git cherry-pick SHA --no-commit`.
3. Fix any conflicts and run your build and tests.
4. Run `git commit` and update the commit message.
Add `kevinphelps/typescript-boilerplate@SHA` to the commit message.

You can run `git log --grep "kevinphelps/typescript-boilerplate"` to keep track of which commits
from this project you have integrated into your project.

## Example projects using this starter
- https://github.com/kevinphelps/nganalyzer
- https://github.com/vintage-software/vstack-typescript-generator
