<script lang="ts">
	import type { Rekap } from '$lib/utils/types';
	import Gadget from './gadget.svelte';

	export let rekap: Rekap;
</script>

<ul class="main">
	<Gadget title="Anggota" value={rekap?.anggota} />
	<Gadget title="Simpanan" value={rekap?.simpanan} />
	<Gadget title="Pinjaman" value={rekap?.pinjaman} />
</ul>

<style lang="postcss">
	.main {
		@apply grid gap-6 md:grid-cols-3;
	}
</style>
