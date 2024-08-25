<script lang="ts">
	export let title: string, value: number | undefined;
</script>

<li class="main">
	<h2>{title}</h2>
	<div class="nilai">{value ?? 0}</div>
</li>

<style lang="postcss">
	.main {
		@apply rounded border bg-white p-3 shadow;
		& h2 {
			@apply text-xl;
		}

		& .nilai {
			@apply text-right text-4xl font-bold;
		}
	}
</style>
