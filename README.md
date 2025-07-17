# Felix Siivonen - Portfolio

A SvelteKit portfolio website showcasing artwork and projects.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

This site is configured for GitHub Pages deployment. The build process creates a static site that works both locally and on GitHub Pages.

### Automatic Deployment (Recommended)

The site uses GitHub Actions for automatic deployment. Simply push to the `main` branch and the site will be built and deployed automatically.

### Manual Deployment

If you need to build manually:

```bash
# Build the site
npm run build

# The build output will be in the `build/` directory
# Deploy the contents of `build/` to GitHub Pages
```

## Configuration

- **Single build process**: Works for both development and production
- **SPA mode**: Uses fallback for client-side routing
- **Prerendered pages**: All pages are prerendered for better performance
- **GitHub Pages**: Configured to serve from the `build/` directory

## Project Structure

- `src/routes/` - SvelteKit pages and layouts
- `src/lib/components/` - Reusable Svelte components
- `static/` - Static assets (images, data)
- `build/` - Production build output (generated)
