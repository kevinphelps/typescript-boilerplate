#! /usr/bin/env node
import * as yargs from 'yargs';

import { helloWorld } from './typescript-boilerplate';

const version = require('./../package.json').version;

yargs.version(version);
const args = yargs.argv;

console.log(helloWorld());

console.log(args);
