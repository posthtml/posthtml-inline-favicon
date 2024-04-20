# posthtml-inline-favicon <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]

`posthtml-inline-favicon` is a [PostHTML](https://github.com/posthtml/posthtml) plugin to inline favicons.

**Before:**

```html
<head>
  <link rel="icon" href="favicon.ico" />
</head>
```

**After:**

```html
<head>
  <link rel="icon" type="image/png" href="data:image/png;base64,..." />
</head>
```

## Install

```bash
# npm
npm i -D posthtml-inline-favicon

# pnpm
pnpm add -D posthtml-inline-favicon

# Yarn
yarn add -D posthtml-inline-favicon
```

## Usage

```js
const fs = require("fs");
const posthtml = require("posthtml");
const { inlineFavicon } = require("posthtml-inline-favicon");

const html = fs.readFileSync("./index.html");

posthtml()
  .use(inlineFavicon())
  .process(html)
  .then((result) => fs.writeFileSync("./after.html", result.html));
```

## Options

By default, the plugin assumes that the file to process is in the same directory as the posthtml script. If not, specify the relative path to the html file in the options:

```js
const fs = require("fs");
const posthtml = require("posthtml");
const { inlineFavicon } = require("posthtml-inline-favicon");

const html = fs.readFileSync("./public/index.html");

posthtml()
  .use(inlineFavicon({ path: "public" }))
  .process(html)
  .then((result) => fs.writeFileSync("./after.html", result.html));
```

## [Example](example)

## Contributing

See the [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs).

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-inline-favicon.svg?color=blue
[npm-url]: https://npmjs.com/package/posthtml-inline-favicon
