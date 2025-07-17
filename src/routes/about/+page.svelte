<script lang="ts">
	import { goto } from '$app/navigation';
	
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
	
	<!-- Portrait Column -->
	<div class="lg:col-span-4 pr-8">
		<div class="aspect-[4/5] overflow-hidden rounded-xl">
			<img 
				src="/images/felix_portrait_2.webp" 
				alt="portrait"
				class="w-full h-full object-cover"
			/>
		</div>
	</div>
	
	<!-- Text Column -->
	<div class="lg:col-span-15 space-y-8">
		<div>
			<h1 class="text-4xl font-light tracking-wide text-gray-900 mb-6">
				About
			</h1>
			
			<div class="prose prose-lg max-w-none">
				<p class="text-lg font-light tracking-wide text-gray-700 leading-relaxed mb-6">
					My sculptural work explores processes of perception and interpretation that operate beneath or beyond human natural language. I’m interested in how we relate to the material world through intuition, sensation, and embodied experience.
				</p>
				
				<p class="text-lg font-light tracking-wide text-gray-700 leading-relaxed mb-6">
					I use mainly papier-mâché for its ability to convey textures, surfaces, and forms that speak to the body. I'm interested in how objects can invite a pre-linguistic encounter.
				</p>
				
				<p class="text-lg font-light tracking-wide text-gray-700 leading-relaxed">
					My practice is influenced by embodied cognition, particularly the idea that meaning is not fixed in language, but emerges through relations—between materials, bodies, and environments.
				</p>
			</div>
		</div>
		
		<!-- Contact Section -->
		<div class="pt-8 border-t border-gray-200">
			<h2 class="text-2xl font-light tracking-wide text-gray-900 mb-4">
				Contact
			</h2>
			
			<div class="space-y-3">
				<div class="flex items-center gap-3">
					<svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
					</svg>
					<p class="text-gray-700 font-light tracking-wide">
						felix.siivonen(a)uniarts.fi
					</p>
				</div>
				
				<div class="flex items-center gap-3">
					<svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
					</svg>
					<span class="text-gray-700 font-light tracking-wide">
						Helsinki, Finland
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
