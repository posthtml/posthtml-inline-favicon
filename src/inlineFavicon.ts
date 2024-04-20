import Datauri from "datauri/sync";
import path from "node:path";
import { type Plugin } from "posthtml";

function inlineFavicon(options: IOptions = { path: "" }): Plugin<void> {
  return function plugin(tree) {
    tree.match(
      {
        tag: "link",
        attrs: { rel: new RegExp(/icon/), href: new RegExp(/\S+/) },
      },
      (node) => {
        const href = node.attrs.href;
        const file = path.join(process.cwd(), options.path || "", href);

        const { base64 } = Datauri(file);

        node.attrs.rel = "icon";
        node.attrs.type = "image/png";
        node.attrs.href = `data:image/png;base64,${base64}`;

        return node;
      },
    );
  };
}

interface IOptions {
  path?: string;
}

export { inlineFavicon };
