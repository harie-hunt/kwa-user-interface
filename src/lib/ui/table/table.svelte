<script lang="ts">
	export let datas: { label: string; name: string }[], values: Record<string, any>[];
</script>

<section>
	<table>
		<thead>
			<tr>
				{#each datas as { label }}
					<th>{label}</th>
				{/each}
			</tr>
		</thead>

		<tbody>
			{#each values as value}
				<tr>
					{#each datas as { name }}
						<td>{value[name]}</td>
					{/each}

					<td class="action">
						<button type="button">Lihat</button>
						<button type="button">Ubah</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style lang="postcss">
	section {
		@apply overflow-x-auto border bg-white shadow;
	}

	table {
		@apply w-full border-collapse text-left;

		& tbody {
			@apply divide-y;

			& tr {
				@apply hover:bg-gray-100;
			}
		}
	}

	thead {
		@apply border-b-2;
	}

	tr th {
		@apply text-nowrap px-3 py-1.5 font-medium text-gray-500;
	}
	tr td {
		@apply p-3;
	}

	td.action {
		@apply py-0 text-right;
	}
</style>
