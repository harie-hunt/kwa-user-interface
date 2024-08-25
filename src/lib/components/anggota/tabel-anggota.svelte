<script lang="ts">
	import Table from '$lib/ui/table/table.svelte';
	import { pickObj } from '$lib/utils';
	import type { Anggota } from '$lib/utils/types';

	export let anggotas: Anggota[];

	let datas = [
		{
			label: 'No',
			name: 'no'
		},
		{
			label: 'Nama',
			name: 'nama'
		}
	];
</script>

<div class="">
	<input type="search" name="ad" id="" />
</div>
<Table {datas} values={anggotas} />
