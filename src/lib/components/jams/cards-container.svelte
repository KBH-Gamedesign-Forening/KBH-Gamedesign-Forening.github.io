<script lang="ts">
	import JamCard from './jam-card.svelte';

	type Card = { year: string; image: string; description: string; link?: string };

	let { cards }: { cards: Card[] } = $props();

	function getRotation(index: number, total: number): number {
		if (total === 1) return 0;
		const spread = Math.min(total - 1, 5) * 8;
		const step = spread / (total - 1);
		return -spread / 2 + step * index;
	}

	function getTranslateX(index: number, total: number): number {
		if (total === 1) return 0;
		const overlap = 0.55;
		const cardWidth = 35;
		const step = cardWidth * overlap;
		const totalWidth = step * (total - 1);
		return -totalWidth / 2 + step * index;
	}

	let cardHeight = $state(0);

	function getMaxTranslateY(total: number): number {
		if (total === 1) return 0;
		const spread = Math.min(total - 1, 5) * 8;
		return (spread / 2) * 1.5;
	}

	function getTranslateY(index: number, total: number): number {
		if (total === 1) return 0;
		const rotation = getRotation(index, total);
		return Math.abs(rotation) * 1.5;
	}
</script>

<div
	class="relative -mb-12 flex items-center justify-center py-5"
	style:height="{cardHeight + getMaxTranslateY(cards.length) + 40}px"
>
	{#each cards as card, i}
		<div
			class="fan-card"
			style:--tx="{getTranslateX(i, cards.length)}vw"
			style:--ty="{getTranslateY(i, cards.length)}px"
			style:--rot="{getRotation(i, cards.length)}deg"
			style:z-index={i}
			bind:clientHeight={cardHeight}
		>
			<JamCard
				year={card.year}
				image={card.image}
				description={card.description}
				link={card.link}
			/>
		</div>
	{/each}
</div>

<style>
	.fan-card {
		position: absolute;
		translate: var(--tx) var(--ty);
		rotate: var(--rot);
		transition:
			translate 0.4s ease,
			rotate 0.4s ease;
		transform-origin: center center;
	}

	.fan-card:hover {
		translate: var(--tx) calc(var(--ty) - 20px);
		rotate: 0deg;
		z-index: 100 !important;
	}
</style>
