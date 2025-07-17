export const prerender = true;

<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	

	let { children } = $props();
</script>

<Navbar />

<main class="py-12">
	{@render children()}
</main>
