'use strict';

const got = require('got');
const TypeGenerator = require('./generator');

async function createTypes(api, version) {
  const json = await fetch(api, version);
  return render(json);
}

async function fetch(api, version) {
  const url = `https://www.googleapis.com/discovery/v1/apis/${api}/${version}/rest`;
  const response = await got(url, {json: true});
  return response.body;
}

function render(json, options) {
  return new TypeGenerator(json, options).render();
}

module.exports = createTypes;
module.exports.createTypes = createTypes;
module.exports.fetch = fetch;
module.exports.render = render;
