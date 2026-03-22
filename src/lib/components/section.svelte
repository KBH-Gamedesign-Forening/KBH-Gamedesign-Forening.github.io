<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="overflow-hidden rounded-xl bg-rose-800/75 p-4 text-white">
	{@render children()}
</div>
