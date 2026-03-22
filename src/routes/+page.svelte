<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Section from '$lib/components/section.svelte';
	import CardsContainer from '$lib/components/jams/cards-container.svelte';
	import Card from '$lib/components/card.svelte';

	const jamCards = [
		{
			year: 'Mar 2025',
			image: '/index/hero_1.jpeg',
			description:
				'Future Game Makers Jam 2025: "Two Buttons", A game jam held between 3 different schools with 30+ contestants'
		},
		{
			year: 'Nov 2025',
			image: '/index/hero_2.jpeg',
			description:
				'KMG Game Jam & LAN: "To Be...", A game jame AND LAN party with more than 30 people joining in for the fun!'
		}
	];
</script>

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
			<img src="/regular_logo.svg" alt="KBH Gamedesign Forening logo" class="w-64 md:w-80" />
		</div>
	</div>
</Hero>

<div id="content" class="main-content flex flex-col p-4 pb-4">
	<Section>
		<div class="flex flex-col">
			<h1 class="text-xl">Our Game Jams</h1>
			<p class="text-white/75">Blablabla</p>
		</div>
		<CardsContainer cards={jamCards} />
	</Section>

	<Section>
		<div class="flex flex-col">
			<h1 class="text-xl">Game Jams we attend</h1>
			<p class="mb-2 text-white/75">Blablabla, Nordic</p>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<Card link="https://itch.io/jam/nordic-game-jam-2025">
					<h1 class="text-xl font-bold">Nordic Game Jam 2025</h1>
					<p>We attended Nordic Game Jam 2025 with over 20 of our schools students</p>
					<img
						src="https://img.itch.zone/aW1hZ2UyL2phbS80MDEyMTEvMjA1MTM1NTcucG5n/original/nrjGrm.png"
						alt="Nordic 2025 logo"
					/>
				</Card>
				<Card link="https://itch.io/jam/nordic-game-jam-2026">
					<h1 class="text-xl font-bold">Nordic Game Jam 2026</h1>
					<p>
						We attended Nordic Game Jam 2026 with over 20 of our schools students AND an entire
						seperate class of students
					</p>
					<img
						src="https://images.squarespace-cdn.com/content/v1/61534224f00322554fd63fdf/a9f37d55-2ac4-485b-a7dd-20331c1fa71f/Logo+1.png"
						alt="Nordic 2026 logo"
					/>
				</Card>
			</div>
		</div>
	</Section>
</div>

<style>
	.main-content {
		margin-top: -25px;
		background-color: white;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}
</style>
