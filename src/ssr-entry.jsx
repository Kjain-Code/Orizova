/* Build-time only (bundled by scripts/prerender.js with esbuild).
 * Renders one URL of the real app to static HTML so search engines and link
 * previews get the full page content, not an empty <div id="root">. */
import React from 'react';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { prerenderToNodeStream } from 'react-dom/static';
import { AppShell } from './App';

// Plain data for the build-time /llms.txt generator (scripts/prerender.js).
import siteAnswers from './data/site/answers';
import serviceAnswers from './data/services/answers';
import locationAnswers from './data/locations/answers';
import industryAnswers from './data/industries/answers';
import workAnswers from './data/work/answers';
import blogAnswers from './data/blog/answers';

export const answers = {
  ...siteAnswers, ...serviceAnswers, ...locationAnswers, ...industryAnswers, ...workAnswers, ...blogAnswers,
};
export { default as facts } from './data/site/facts';
export { default as services } from './data/services/services';
export { default as contact } from './data/site/contact';

const streamToString = (stream) =>
  new Promise((resolve, reject) => {
    let out = '';
    stream.on('data', (chunk) => { out += chunk.toString(); });
    stream.on('end', () => resolve(out));
    stream.on('error', reject);
  });

export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <HelmetProvider>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>,
    // Never split large Suspense boundaries into out-of-order chunks: we want
    // one plain, fully inlined HTML document for crawlers.
    { progressiveChunkSize: Number.MAX_SAFE_INTEGER }
  );
  return streamToString(prelude);
}
