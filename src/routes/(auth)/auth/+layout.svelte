<script lang="ts">
	import LogoBrand from '$lib/components/login/logo-brand.svelte';
    import type { LayoutData } from './$types';
    
    // export let data: LayoutData;
</script>

<svelte:head>
    <title>Masuk Pengguna | Koperasi Wanita Anggrek</title>
</svelte:head>

<div class="flex justify-center items-center h-dvh">
<main class="grid gap-6 lg:grid-cols-2 lg:items-center">
    <LogoBrand/>
    <slot/>
</main>
</div>