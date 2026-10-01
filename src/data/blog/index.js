import postsA from './posts-a';
import postsB from './posts-b';

// Newest first. Add new posts to posts-a/posts-b (or a new file) and to
// src/data/seo.json so they are pre-rendered and listed in the sitemap.
const posts = [...postsA, ...postsB];

export const AUTHOR = { name: 'Orizova Digital Team' }; // {{TODO: add a named author + short bio for E-E-A-T}}

export default posts;
