import type { LoadEvent } from '@sveltejs/kit';

export const prerender = true;

export const load = async ({ fetch }: LoadEvent) => {
  const response = await fetch('/data/artworks.json');
  const data = await response.json();
  return { artworks: data };
};