<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Section from '$lib/components/section.svelte';
	import CardsContainer from '$lib/components/jams/cards-container.svelte';
	import Card from '$lib/components/card.svelte';
</script>

<svelte:head>
	<title>KBH GameDesign Forening</title>
</svelte:head>

<Hero>
	<div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
		<div class="text-center text-white sm:text-left">
			<h1 class="mb-6 text-4xl font-bold md:text-5xl">KBH Gamedesign Forening</h1>
			<p class="mb-4 text-lg leading-relaxed text-white/90">
				Vi er en forening med det simple mål at promovere og facilitere spiludvikling på NEXT
				Københavns Mediegymnasium.
			</p>
			<p class="text-lg leading-relaxed text-white/80">
				Vi kører skolens Game Jams, hjælper med faglige spil design forløb og mødes hvert uge for at
				dele idéer, arbejde på projekter og lære af hinanden. Kom og vær en del af fællesskabet hvis
				du er elev på mediegym!
			</p>
		</div>

		<div class="flex justify-center">
			<img src="/logo.svg" alt="KBH Gamedesign Forening logo" class="w-64 md:w-80" />
		</div>
	</div>
</Hero>

<div id="content" class="main-content flex flex-col p-4 pb-4">
	<Section>
		<div class="flex flex-col">
			<h1 class="text-xl">Our Game Jams</h1>
			<p class="text-white/75">
				Holdt to gange om året, mange teams, venskaber og spil er blevet formet her.
			</p>
		</div>
		<CardsContainer />
	</Section>

	<Section>
		<div class="flex flex-col">
			<h1 class="text-xl">Game Jams vi er med til!</h1>
			<p class="mb-2 text-white/75">
				En utrolig mulighed for at lære fra professionelle, lave spil og at have det sjovt!
			</p>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<Card link="https://itch.io/jam/nordic-game-jam-2025">
					<h1 class="text-xl font-bold">Nordic Game Jam 2025</h1>
					<p>Vi tog til Nordic Game Jam 2025 med over 20 af skolens elever.</p>
					<div class="flex grow flex-col justify-center">
						<img
							class="rounded-lg"
							src="https://img.itch.zone/aW1hZ2UyL2phbS80MDEyMTEvMjA1MTM1NTcucG5n/original/nrjGrm.png"
							alt="Nordic 2025 logo"
						/>
					</div>
				</Card>
				<Card link="https://itch.io/jam/nordic-game-jam-2026">
					<h1 class="text-xl font-bold">Nordic Game Jam 2026</h1>
					<p>Vi tog til Nordic Game Jam 2026 med over 20 af skolens elever OG en hel klasse.</p>
					<div class="flex grow flex-col justify-center">
						<img
							class="rounded-lg"
							src="https://images.squarespace-cdn.com/content/v1/61534224f00322554fd63fdf/a9f37d55-2ac4-485b-a7dd-20331c1fa71f/Logo+1.png"
							alt="Nordic 2026 logo"
						/>
					</div>
				</Card>
			</div>
		</div>
	</Section>
</div>
