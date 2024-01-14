'use strict';

const axios = require('axios');
const TypeGenerator = require('./generator');

async function createTypes(version, key) {
  const json = await fetch(version, key);
  return render(json);
}

/**
 * @see {@link https://ai.google.dev/api/rest?hl=en}
 */
async function fetch(version, key) {
  const url = `https://generativelanguage.googleapis.com/$discovery/rest?version=${version}&key=${key}`;
  const response = await axios(url);
  return response.data;
}

function render(json, options) {
  return new TypeGenerator(json, options).render();
}

module.exports = createTypes;
module.exports.createTypes = createTypes;
module.exports.fetch = fetch;
module.exports.render = render;
