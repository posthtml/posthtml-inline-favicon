import posthtml from 'posthtml';
import { inlineFavicon } from '../';

describe('posthtml-inline-favicon', () => {
  it('matches the snapshot', () => {
    posthtml()
      .use(inlineFavicon({ path: 'src/tests' }))
      .process(
        `<head>
          <link rel="shortcut icon" href="favicon.ico">
        </head>`
      )
      .then((result: { html: string }) => {
        expect(result.html).toMatchSnapshot();
      });
  });
});
