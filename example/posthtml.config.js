const fs = require("fs");
const posthtml = require("posthtml");
const { inlineFavicon } = require("posthtml-inline-favicon");

function runPlugin({ html, options, output }) {
  posthtml()
    .use(inlineFavicon(options))
    .process(html)
    .then((result) => fs.writeFileSync(output, result.html));
}

runPlugin({
  html: fs.readFileSync("./index.html"),
  options: undefined,
  output: "./after.default.html",
});

runPlugin({
  html: fs.readFileSync("./public/index.html"),
  options: { path: "public" },
  output: "./after.public.html",
});
