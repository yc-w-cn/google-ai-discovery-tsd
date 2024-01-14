'use strict';

const fs = require('fs');
const path = require('path');
const pify = require('util').promisify;
const test = require('ava');

const {createTypes, fetch, render} = require('../');
const readFile = pify(fs.readFile);

// just doing a very simple test here since the render tests should provide
// more complete tests for the types output
test('createTypes', async t => {
  t.plan(1);

  const types = await createTypes('v1', 'your_key_here');
  t.regex(types, /namespace generativelanguage \{/);
});

test('fetch', async t => {
  t.plan(1);

  const json = await fetch('v1', 'your_key_here');
  t.is(json.name, 'generativelanguage');
});

test('render - simple', async t => {
  t.plan(1);

  const json = require('./fixtures/simple/schema.json');
  const types = path.join(__dirname, './fixtures/simple/types.d.ts');
  const expected = await readFile(types, 'utf8');

  t.is(render(json), expected);
});

test('render - complex', async t => {
  t.plan(1);

  const json = require('./fixtures/complex/schema.json');
  const types = path.join(__dirname, './fixtures/complex/types.d.ts');
  const expected = await readFile(types, 'utf8');

  t.is(render(json), expected);
});

test('render - methods', async t => {
  t.plan(1);

  const json = require('./fixtures/methods/schema.json');
  const types = path.join(__dirname, './fixtures/methods/types.d.ts');
  const expected = await readFile(types, 'utf8');

  t.is(render(json), expected);
});

test('render - nested methods', async t => {
  t.plan(1);

  const json = require('./fixtures/nested/schema.json');
  const types = path.join(__dirname, './fixtures/nested/types.d.ts');
  const expected = await readFile(types, 'utf8');

  t.is(render(json), expected);
});
