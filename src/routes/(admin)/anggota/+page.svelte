<script lang="ts">
	import TabelAnggota from '$lib/components/anggota/tabel-anggota.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-lg font-medium">Anggota</h1>

{#await data.promise_anggotas}
	<p>Memuat..</p>
{:then anggotas}
	<TabelAnggota {anggotas} />
{/await}
