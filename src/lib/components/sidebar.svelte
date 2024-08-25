<script lang="ts">
	import { cn } from '$lib/utils/cn';

	let menus = [
		{ label: 'Beranda', href: '/' },
		{ label: 'Anggota', href: '/anggota' },
		{ label: 'Transaksi', href: '/transaksi' }
	];
</script>

<aside class={cn('w-40 bg-gray-700 py-3 text-white', $$props.class)}>
	<h4 class="text-gray-400">Menu Utama</h4>
	<nav class="text-lg">
		{#each menus as { label, href }}
			<a {href} class="block px-3 py-1">{label}</a>
		{/each}
	</nav>
</aside>
