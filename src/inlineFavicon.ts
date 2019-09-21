import Datauri from 'datauri';
import path from 'path';
import { PostHTML } from 'posthtml';

function inlineFavicon(options: IOptions = { path: '' }) {
  return function plugin(tree: PostHTML.Node) {
    tree.match(
      { tag: 'link', attrs: { rel: 'shortcut icon', href: new RegExp(/\S+/) } },
      node => {
        const href = node.attrs!.href as string;
        const file = path.join(process.cwd(), options.path || '', href);

        const { base64 } = new Datauri(file);

        node.attrs!.rel = 'icon';
        node.attrs!.type = 'image/png';
        node.attrs!.href = `data:image/png;base64,${base64}`;

        return node;
      }
    );
  };
}

interface IOptions {
  path?: string;
}

export { inlineFavicon };
