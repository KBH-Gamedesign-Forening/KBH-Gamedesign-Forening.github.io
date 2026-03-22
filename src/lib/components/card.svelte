<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, link }: { children: Snippet; link: string } = $props();
</script>

<a
	href={link ?? '#'}
	class="shrink rounded-xl bg-white p-4 text-black transition-all duration-300 ease-in-out mt-2.5 hover:mt-0 hover:mb-2.5"
>
	{@render children()}
</a>
