<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
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

<div class="main-content flex flex-col p-2">
	<h1 class="text-5xl">WOWSERS!</h1>

	<div class="flex justify-center">
		<img src="/regular_logo.svg" alt="KBH Gamedesign Forening logo" class="w-64 md:w-80" />
	</div>
	<div class="flex justify-center">
		<img src="/regular_logo.svg" alt="KBH Gamedesign Forening logo" class="w-64 md:w-80" />
	</div>
	<div class="flex justify-center">
		<img src="/regular_logo.svg" alt="KBH Gamedesign Forening logo" class="w-64 md:w-80" />
	</div>
	<div class="flex justify-center">
		<img src="/regular_logo.svg" alt="KBH Gamedesign Forening logo" class="w-64 md:w-80" />
	</div>
	<div class="flex justify-center">
		<img src="/regular_logo.svg" alt="KBH Gamedesign Forening logo" class="w-64 md:w-80" />
	</div>
	<div class="flex justify-center">
		<img src="/regular_logo.svg" alt="KBH Gamedesign Forening logo" class="w-64 md:w-80" />
	</div>
	<div class="flex justify-center">
		<img src="/regular_logo.svg" alt="KBH Gamedesign Forening logo" class="w-64 md:w-80" />
	</div>
	<div class="flex justify-center">
		<img src="/regular_logo.svg" alt="KBH Gamedesign Forening logo" class="w-64 md:w-80" />
	</div>
	<div id="resources" class="flex justify-center">
		<img src="/regular_logo.svg" alt="KBH Gamedesign Forening logo" class="w-64 md:w-80" />
	</div>
</div>

<style>
	.main-content {
		margin-top: -25px;
		background-color: white;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}
</style>
