<script lang="ts">
	let { children } = $props();
</script>

<div id="content" class="flex flex-col p-4 pb-0">
	{@render children()}
</div>
