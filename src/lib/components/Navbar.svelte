<script lang="ts">
	import { page } from '$app/stores';
	
	let isMenuOpen = false;
	
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="bg-white">
	<div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-20">
			<!-- Name -->
			<div class="flex-shrink-0">
				<a href="/" class="text-xl font-light tracking-wide text-gray-900">
					Felix Siivonen
				</a>
			</div>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="flex items-center space-x-12 pr-3">
					<a 
						href="/" 
						class="text-xl font-light tracking-wide text-gray-600 hover:text-gray-900 {$page.url.pathname === '/' ? 'text-gray-900' : ''}"
					>
						Works
					</a>
					<a 
						href="/about" 
						class="text-xl font-light tracking-wide text-gray-600 hover:text-gray-900 {$page.url.pathname === '/about' ? 'text-gray-900' : ''}"
					>
						About
					</a>
				</div>
			</div>
			
			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					on:click={toggleMenu}
					class="p-2 text-gray-600 hover:text-gray-900"
					aria-expanded="false"
				>
					<span class="sr-only">Open menu</span>
					{#if !isMenuOpen}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{:else}
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="md:hidden border-t border-gray-100">
			<div class="px-3 py-4 space-y-4">
				<a 
					href="/" 
					class="block text-xl font-light tracking-wide text-gray-600 hover:text-gray-900 {$page.url.pathname === '/' ? 'text-gray-900' : ''}"
				>
					Works
				</a>
				<a 
					href="/about" 
					class="block text-xl font-light tracking-wide text-gray-600 hover:text-gray-900 {$page.url.pathname === '/about' ? 'text-gray-900' : ''}"
				>
					About
				</a>
			</div>
		</div>
	{/if}
</nav> 