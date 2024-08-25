<script lang="ts">
	import type { PageData } from './$types';

	// export let data: PageData;
</script>

<div class="grid gap-6 border bg-white p-6 shadow dark:border-neutral-800 dark:bg-neutral-900">
	<div class="text-center">
		<h1 class="text-2xl font-bold text-primary-500 lg:text-4xl">Masuk Pengguna</h1>
		<p class="text-secondary-400">Silakan masuk terlebih dahulu</p>
	</div>

	<form action="" class="grid gap-3">
		<label class="block">
			<span class="mb-1 block font-medium text-gray-500">Nama Pengguna</span>
			<input
				type="text"
				name="nama_pengguna"
				class="h-9 w-full rounded border border-gray-300 bg-gray-100 px-3 dark:border-gray-700 dark:bg-gray-800"
			/>
		</label>
		<label class="block">
			<span class="mb-1 block font-medium text-gray-500">Kata Sandi</span>
			<input
				type="password"
				name="nama_pengguna"
				class="h-9 w-full rounded border border-gray-300 bg-gray-100 px-3 dark:border-gray-700 dark:bg-gray-800"
			/>
		</label>

		<button type="submit" class="h-9 rounded bg-primary-600 px-4 text-white">Masuk</button>
	</form>
</div>
