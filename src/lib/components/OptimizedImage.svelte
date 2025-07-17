<script lang="ts">
	export let src: string;
	export let alt: string;
	export let width: number | undefined = undefined;
	export let height: number | undefined = undefined;
	export let sizes: string = "100vw";
	export let className: string = "";
	
	let error = false;
	
	function handleError() {
		error = true;
	}
</script>

<div class="relative">
	{#if !error}
		<img 
			{src}
			{alt}
			{width}
			{height}
			{sizes}
			loading="lazy"
			decoding="async"
			class="w-full h-full object-cover {className}"
			on:error={handleError}
		/>
	{:else}
		<div class="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-lg {className}">
			<p class="text-gray-500 text-sm font-light tracking-wide">
				{alt}
			</p>
		</div>
	{/if}
</div> 