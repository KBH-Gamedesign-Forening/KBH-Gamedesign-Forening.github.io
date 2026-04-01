<script lang="ts">
	import JamCard from './jam-card.svelte';
	import Card from '$lib/components/card.svelte';
	import { browser } from '$app/environment';
	import Device from 'svelte-device-info';

	const isMobile = $derived(browser && Device.isMobile);

	type CardData = { year: string; image: string; description: string; link?: string };

	const jamCards: CardData[] = [
		{
			year: 'Mar 2025',
			image: '/index/hero_1.jpeg',
			link: '/jams/mar_25',
			description:
				'Future Game Makers Jam 2025: "Two Buttons", A game jam held between 3 different schools with 30+ contestants'
		},
		{
			year: 'Nov 2025',
			image: '/index/hero_2.jpeg',
			link: '/jams/nov_25',
			description:
				'KMG Game Jam & LAN: "To Be...", A game jame AND LAN party with more than 30 people joining in for the fun!'
		}
	];

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

{#if isMobile}
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
		{#each jamCards as card, i}
			<Card link={card.link ?? ''}>
				<h1 class="text-xl font-bold">{card.year}</h1>
				<p>{card.description}</p>
				<div class="flex grow flex-col justify-center">
					<img class="rounded-lg" src={card.image ?? ''} alt="Nordic 2025 logo" />
				</div>
			</Card>
		{/each}
	</div>
{:else}
	<div
		class="relative -mb-12 flex items-center justify-center py-5"
		style:height="{cardHeight + getMaxTranslateY(jamCards.length) + 40}px"
	>
		{#each jamCards as card, i}
			<div
				class="fan-card"
				style:--tx="{getTranslateX(i, jamCards.length)}vw"
				style:--ty="{getTranslateY(i, jamCards.length)}px"
				style:--rot="{getRotation(i, jamCards.length)}deg"
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
{/if}

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
