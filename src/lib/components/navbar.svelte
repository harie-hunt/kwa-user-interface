<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import Brand from './brand.svelte';
	import ProfilUser from './profil-user.svelte';
</script>

<div class={cn('main', $$props.class)}>
	<Brand />

	<ProfilUser />
</div>

<style lang="postcss">
	.main {
		@apply flex h-9 items-center bg-primary-500 text-white;
	}
</style>
