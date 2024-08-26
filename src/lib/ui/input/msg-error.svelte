<script lang="ts">
	export let errors: string[] | undefined = undefined;
</script>

{#if errors}
	<div>
		{errors}
	</div>
{/if}

<style lang="postcss">
	div {
		@apply text-sm text-red-500;
	}
</style>
