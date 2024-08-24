<script lang="ts">
	import '../app.css';
</script>

<slot/>

<style lang="postcss">
	:global(body) {
		@apply text-gray-700 bg-slate-100 dark:bg-black dark:text-neutral-200;
	}
</style>
