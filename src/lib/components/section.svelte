<script lang="ts">
	let props = $props();
</script>

<div {...props} class="{props.class} mb-4 overflow-hidden rounded-xl bg-rose-800/75 p-4 text-white">
	{@render props.children()}
</div>
