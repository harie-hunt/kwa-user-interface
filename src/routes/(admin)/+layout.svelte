<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import type { LayoutData } from './$types';

	// export let data: LayoutData;
</script>

<svelte:head>
	<title>Koperasi Wanita Anggrek</title>
</svelte:head>

<Navbar />

<slot />
