#!/usr/bin/env node

const meow = require('meow');
const createTypes = require('./');

const {input, flags} = meow(
  `
  Usage
    $ dtsd <version> <key>

  Examples
    $ dtsd v2 your_key_here > generativelanguage.d.ts
`,
  {
    flags: {}
  }
);

/* eslint-disable no-console */
createTypes(...input, flags)
  .then(types => console.log(types))
  .catch(err => console.error(err));
