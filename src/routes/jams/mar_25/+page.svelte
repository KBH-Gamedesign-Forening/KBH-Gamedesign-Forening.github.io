<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Section from '$lib/components/section.svelte';
	import Card from '$lib/components/card.svelte';
	import type { JamGameCard } from '$lib/types/jams';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let submissions: JamGameCard[] = data?.submissions;

	console.log(data);

	const TITLE = 'KMG Game Jam March 2025';
</script>

<header>
	<title>{TITLE}</title>
</header>

<div id="content" class="flex flex-col p-4 pb-4">
	<Section>
		<div class="flex flex-col">
			<h1 class="text-xl">KMG Game Jam March 2025</h1>
			<p class="mb-2 text-white/75">
				Det første af 2025's to Game Jams med themen "Two buttons" og over 10 spil spredt mellem 3
				skoler der hver kårede mindst et vinder hold og en anden plads! Dette Jam endte med at forme
				et spil studie og flere venskaber.
			</p>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each submissions as submission}
					<Card link={submission.link}>
						<h1 class="text-xl font-bold">{submission.title}</h1>
						<p class="text-black/50">
							Created by: <span class="text-black">{submission.creator}</span>
						</p>
						<div class="flex grow flex-col justify-center">
							<img class="rounded-lg" src={submission.imgPath} alt="Nordic 2025 logo" />
						</div>
					</Card>
				{/each}
			</div>
		</div>
	</Section>
</div>
