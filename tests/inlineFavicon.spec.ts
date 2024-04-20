import posthtml from "posthtml";
import { inlineFavicon } from "../src";

describe("posthtml-inline-favicon", () => {
  it("matches the snapshot", () => {
    posthtml()
      .use(inlineFavicon({ path: "tests" }))
      .process(
        `<head>
          <link rel="shortcut icon" href="favicon.ico">
        </head>`,
      )
      .then(({ html }) => {
        expect(html).toMatchSnapshot();
      });
  });
});
