<script lang="ts">
	import { page } from '$app/stores';
	import OptimizedImage from '$lib/components/OptimizedImage.svelte';
	import { goto } from '$app/navigation';
	
	// Get the slug from the URL
	$: workSlug = $page.params.slug;
	
	// Initialize empty workData
	$: workData = {
		title: "",
		year: "",
		materials: "",
		dimensions: "",
		description: "",
		images: []
	};
	
	// Helper function to get the correct grid span class
	function getGridSpanClass(span: number): string {
		switch(span) {
			case 1: return "lg:col-span-1"; // 1 column
			case 2: return "lg:col-span-2"; // 2 columns
			case 3: return "lg:col-span-3"; // 3 columns (full width)
			default: return "lg:col-span-1";
		}
	}
	
	// Load JSON data
	async function loadArtworkData(slug: string) {
		try {
			const response = await fetch('/data/artworks.json');
			const artworks = await response.json();
			
			// Find the artwork with matching slug
			const artwork = artworks.find((artwork: any) => artwork.slug === slug);
			
			if (artwork) {
				return {
					title: artwork.title,
					year: artwork.year,
					materials: artwork.materials,
					dimensions: artwork.dimensions,
					description: artwork.description || "",
					images: artwork.images || []
				};
			}
		} catch (error) {
			console.error('Error loading artwork data:', error);
		}
		
		// Return empty data if not found
		return {
			title: "Artwork not found",
			year: "",
			materials: "",
			dimensions: "",
			description: "",
			images: []
		};
	}
	
	// Load data when slug changes
	$: {
		if (workSlug) {
			loadArtworkData(workSlug).then(data => {
				workData = data;
			});
		}
	}
	
	// Navigation function
	function goBack() {
		goto('/');
	}
</script>

<div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-20 gap-2">
	<!-- Navigation Column - Back Arrow (very thin) -->
	<div class="lg:col-span-1 flex items-start justify-start lg:justify-left pt-1 pb-4">
		<button 
			on:click={goBack}
			class="text-gray-600 cursor-pointer"
			aria-label="Go back to works"
		>
			<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
			</svg>
		</button>
	</div>
	
	<!-- Artwork Details Column -->
	<div class="lg:col-span-4 pr-8 pb-5">
		<h1 class="text-2xl font-light tracking-wide text-gray-900 mb-4">
			{workData.title}
		</h1>
		
		<div class="text-xl font-light tracking-wide text-gray-600 space-y-2">
			<p>{workData.year}</p>
			<p>{workData.materials}</p>
			<p>{workData.dimensions}</p>
		</div>
		
		{#if workData.description}
			<div class="mt-8">
				<p class="text-sm font-light tracking-wide text-gray-700 leading-relaxed">
					{workData.description}
				</p>
			</div>
		{/if}
	</div>
	
	<!-- Images Column -->
	<div class="lg:col-span-15">
		<!-- Nested Grid for Images -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each workData.images as image, index}
				<div class="{getGridSpanClass(image.span || 1)}">
					<OptimizedImage 
						src={image.src}
						alt={image.alt}
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
			{/each}
		</div>
	</div>
</div> 
