<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/logo.svg" />
</svelte:head>

{@render children()}

<Section class="mx-4">
	<a class="text-xl font-bold" href="/GDF_Vedtægter.pdf">Vedtægter</a>
</Section>
