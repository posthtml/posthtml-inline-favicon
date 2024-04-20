# example

> `posthtml-inline-favicon` example demonstrating default and custom options.

[posthtml.config.js](posthtml.config.js) contains the script that runs the `posthtml-inline-favicon` plugin.

## Set-up

### Default

The default behavior (no plugin options) assumes that `index.html` is located in the same folder as the script.

```js
// posthtml.config.js
runPlugin({
  html: fs.readFileSync("./index.html"),
  options: undefined,
  output: "./after.default.html",
});
```

### Custom

The custom behavior uses the `index.html` in the `public` folder.

```js
// posthtml.config.js
runPlugin({
  html: fs.readFileSync("./public/index.html"),
  options: { path: "public" },
  output: "./after.public.html",
});
```

## Running Locally

Clone the repo and install the dependencies:

```bash
git clone git@github.com:metonym/posthtml-inline-favicon.git
cd posthtml-inline-favicon/example
yarn install
```

Run the script:

```bash
node posthtml.config.js
```

The processed files should be written to `after.default.html` and `after.public.html`.
