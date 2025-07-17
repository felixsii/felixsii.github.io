# Felix Siivonen - Portfolio

A SvelteKit portfolio website showcasing artwork and projects.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for local testing
npm run build

# Preview production build locally
npm run preview
```

## Deployment

This site is configured for GitHub Pages deployment with the correct base path (`/felixsii.github.io`).

### Automatic Deployment (Recommended)

The site uses GitHub Actions for automatic deployment. Simply push to the `main` branch and the site will be built and deployed automatically.

### Manual Deployment

If you need to build manually for GitHub Pages:

```bash
# Build for GitHub Pages (with base path)
npm run build:gh-pages

# The build output will be in the `build/` directory
# Deploy the contents of `build/` to GitHub Pages
```

## Configuration

- **Development**: No base path, prerenders all pages
- **Production**: Uses base path `/felixsii.github.io`, SPA mode with fallback
- **GitHub Pages**: Configured to serve from the `build/` directory

## Project Structure

- `src/routes/` - SvelteKit pages and layouts
- `src/lib/components/` - Reusable Svelte components
- `static/` - Static assets (images, data)
- `build/` - Production build output (generated)
