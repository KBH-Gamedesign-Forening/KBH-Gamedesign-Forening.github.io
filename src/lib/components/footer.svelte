<script lang="ts">
	import Section from './section.svelte';

	let props = $props();
</script>

<Section {...props} class="{props.class} mx-4">
	{@render props.children()}
</Section>
