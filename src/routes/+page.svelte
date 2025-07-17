<script lang="ts">
  import OptimizedImage from '$lib/components/OptimizedImage.svelte';
  export let data;
  let artworks = data.artworks.map((artwork: any) => {
    const thumbnailImage = artwork.images.find((img: any) => img.thumbnail);
    return {
      slug: artwork.slug,
      title: artwork.title,
      year: artwork.year,
      thumbnail: thumbnailImage || artwork.images[0]
    };
  });
</script>

<div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
	<!-- Gallery Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4">
		{#each artworks as artwork}
			<a 
				href="/{artwork.slug}" 
				class="group block overflow-hidden rounded-lg"
			>
				<div class="overflow-hidden rounded-lg">
					<OptimizedImage 
						src={artwork.thumbnail.src}
						alt={artwork.thumbnail.alt}
						className="w-full object-contain"
					/>
				</div>
			</a>
		{/each}
	</div>
</div>
