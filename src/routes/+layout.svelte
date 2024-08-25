<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>Koperasi Wanita Anggrek</title>
</svelte:head>

<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-slate-100 text-gray-700 dark:bg-black dark:text-neutral-200;
	}
</style>
