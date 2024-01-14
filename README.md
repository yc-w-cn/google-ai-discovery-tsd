# discovery-tsd

> Generate TypeScript types from Google AI's [Discovery API](https://ai.google.dev/api/rest?hl=en)

## Install

```bash
$ pnpm install @yc-w-cn/google-ai-discovery-tsd
```

## CLI

```sh
$ dtsd v1 your_key_here > generativelanguage-v1.d.ts
$ dtsd v1beta your_key_here > generativelanguage-v1beta.d.ts
```

## API

### createTypes(api, version, [options])

```js
const createTypes = require('discovery-tsd');
const fs = require('fs');
const {promisify} = require('util');

const writeFile = promisify(fs.writeFile);

async function getTypes() {
  const types = await createTypes('v1', 'your_key_here');
  await writeFile('./generativelanguage.d.ts', types);
}
```

### fetch(api, version)

Fetches the [Discovery Document resource]((https://ai.google.dev/api/rest?hl=en).

Refer to the [`getRest` Documentation](https://developers.google.com/discovery/v1/reference/apis/getRest) for more details.

```js
const {fetch} = require('google-ai-discovery-tsd');

async function getJSON() {
  const json = await fetch('v1', 'your_key_here');
}
```

### render(json, [options])

Creates types for the supplied Discovery Document JSON.

```js
const {fetch, render} = require('google-ai-discovery-tsd');

async function createTypes() {
  const json = await fetch('v1', 'your_key_here');
  return render(json);
}
```

## License

ISC
