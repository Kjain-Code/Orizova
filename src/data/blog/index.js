import postsA from './posts-a';
import postsB from './posts-b';
import postsC from './posts-c';
import postsD from './posts-d';
import postsE from './posts-e';
import postsF from './posts-f';

// Newest first. Add new posts to posts-a/posts-b (or a new file) and to
// src/data/site/seo.json so they are pre-rendered and listed in the sitemap.
const posts = [...postsF, ...postsE, ...postsD, ...postsC, ...postsA, ...postsB];

export const AUTHOR = { name: 'Orizova Digital Team' }; // {{TODO: add a named author + short bio for E-E-A-T}}

export default posts;
