<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	const totalImages = 13;
	let imageIndex = $state(Math.floor(Math.random() * totalImages) + 1);
	let imageSrc = $derived(`/index/hero_${imageIndex}.jpeg`);

	// Preload adjacent images for smooth transitions
	let prevIndex = $derived(imageIndex <= 1 ? totalImages : imageIndex - 1);
	let nextIndex = $derived(imageIndex >= totalImages ? 1 : imageIndex + 1);

	// Preload all images on mount
	$effect(() => {
		for (let i = 1; i <= totalImages; i++) {
			const link = document.createElement('link');
			link.rel = 'preload';
			link.as = 'image';
			link.href = `/index/hero_${i}.jpeg`;
			document.head.appendChild(link);
		}
	});

	// Crossfade state
	let transitioning = $state(false);
	let outgoingSrc = $state('');

	function changeTo(newIndex: number) {
		if (transitioning) return;
		outgoingSrc = imageSrc;
		imageIndex = newIndex;
		transitioning = true;
		// Match the CSS transition duration
		setTimeout(() => {
			transitioning = false;
			outgoingSrc = '';
		}, 500);
	}

	function prev() {
		changeTo(prevIndex);
	}

	function next() {
		changeTo(nextIndex);
	}
</script>

<svelte:head>
	<link rel="preload" as="image" href={`/index/hero_${imageIndex}.jpeg`} fetchpriority="high" />
</svelte:head>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<section class="relative min-h-screen overflow-hidden">
	<!-- Current image (always present) -->
	<img
		src={imageSrc}
		alt=""
		fetchpriority="high"
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<!-- Outgoing image (fades out during transition) -->
	{#if transitioning && outgoingSrc}
		<img
			src={outgoingSrc}
			alt=""
			class="hero-fade-out absolute inset-0 -z-10 h-full w-full object-cover"
		/>
	{/if}

	<div>
		<button
			onclick={prev}
			class="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-rose-800/75 p-2 transition-colors hover:bg-black/70"
		>
			<img src="/left.svg" alt="Previous" class="h-8 w-8" />
		</button>

		<button
			onclick={next}
			class="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-rose-800/75 p-2 transition-colors hover:bg-black/70"
		>
			<img src="/right.svg" alt="Next" class="h-8 w-8" />
		</button>

		<div
			class="absolute bottom-26 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 rounded-xl bg-rose-800/75 px-4 py-2 text-center text-white"
		>
			<span class="text-xs tracking-wide uppercase opacity-80">{imageIndex} / {totalImages}</span>
		</div>

		<a
			class="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 rounded-xl bg-rose-800/75 px-4 py-2 text-center text-white"
			href="#content"
		>
			<img src="/down.svg" alt="Scroll down" class="h-6 w-6 opacity-80" />
		</a>
	</div>

	<div class="hero-bg relative z-10 flex items-center justify-center">
		<div class="relative max-w-3xl rounded-2xl bg-rose-800/75 px-16 py-8 sm:px-8">
			{@render children()}
		</div>
	</div>
</section>

<style>
	.hero-bg {
		height: calc(100vh + 25px);
	}

	.hero-fade-out {
		animation: fadeOut 500ms ease-out forwards;
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
