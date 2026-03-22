<script lang="ts">
	let {
		year,
		image,
		description,
		link
	}: { year: string; image: string; description: string; link?: string } = $props();
</script>

<a
	href={link ?? '#'}
	class="flex w-[35vw] cursor-pointer flex-col overflow-hidden rounded-xl bg-white text-inherit no-underline transition-all duration-300 ease-in-out hover:-translate-y-2.5"
	target="_blank"
	rel="noopener noreferrer"
>
	<div class="flex justify-center px-3 py-2.5">
		<span class="text-base font-semibold text-black">{year}</span>
	</div>
	<div class="aspect-4/3 w-full overflow-hidden">
		<img src={image} alt={description} class="h-full w-full object-cover" />
	</div>
	<div class="px-3 py-2.5">
		<p class="text-sm leading-snug text-gray-600">{description}</p>
	</div>
</a>
