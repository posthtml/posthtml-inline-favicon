import fs from "node:fs";
import path from "node:path";
import { type Plugin } from "posthtml";

type Options = {
  /**
   * The relative path to the folder containing the favicon.
   * @example "public"
   */
  path?: string;
};

export function inlineFavicon(options?: Options): Plugin<void> {
  const relativePath = options?.path ?? "";

  return function plugin(tree) {
    tree.match(
      {
        tag: "link",
        attrs: {
          rel: new RegExp(/icon/),
          href: new RegExp(/\S+/),
        },
      },
      (node) => {
        const href = node.attrs.href;
        const file = path.join(process.cwd(), relativePath, href);
        const source = fs.readFileSync(file);
        const base64 = Buffer.from(source).toString("base64");

        node.attrs.rel = "icon";
        node.attrs.type = "image/png";
        node.attrs.href = `data:image/png;base64,${base64}`;

        return node;
      }
    );
  };
}
