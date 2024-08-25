<script lang="ts">
	import ListGadget from '$lib/components/beranda/list-gadget.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="mb-3 text-lg font-medium">Selamat datang, Nama</h1>

{#await data.promise_rekap}
	<p>Memuat..</p>
{:then rekap}
	<ListGadget {rekap} />
{/await}
