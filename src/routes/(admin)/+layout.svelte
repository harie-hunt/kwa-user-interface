<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
	import type { LayoutData } from './$types';

	// export let data: LayoutData;
</script>

<svelte:head>
	<title>Koperasi Wanita Anggrek</title>
</svelte:head>

<div class="grid h-dvh grid-cols-[max-content_1fr] grid-rows-[max-content_1fr]">
	<Navbar class="col-span-full" />

	<Sidebar class="" />

	<main class="p-3">
		<slot />
	</main>
</div>
