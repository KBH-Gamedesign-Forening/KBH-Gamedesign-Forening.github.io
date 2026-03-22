<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="mb-4 overflow-hidden rounded-xl bg-rose-800/75 p-4 text-white">
	{@render children()}
</div>
