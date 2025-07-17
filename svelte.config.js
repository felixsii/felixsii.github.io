import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // Important for GitHub Pages!
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: false
    }),
    paths: {
      base: '/portfolio' // ← your GitHub repo name
    },
    prerender: {
      entries: [
        '/',
        '/about',
        '/blue_2025',
        '/orange_2024', 
        '/two_colors_2024',
        '/stick_and_support_2024',
        '/green_2024'
      ],
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore missing images during prerender
        if (path.startsWith('/images/')) {
          return;
        }
        
        // Throw error for other missing resources
        throw new Error(message);
      }
    }
  }
};

export default config;
