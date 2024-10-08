// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Rikshith Tirumanpuri";
export const SITE_DESCRIPTION =
  "Welcome to my portfolio and personal blog! I write about latest tech, latest projects, recipes and books.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Rikshith";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
