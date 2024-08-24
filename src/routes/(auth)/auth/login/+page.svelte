<script lang="ts">
  import type { PageData } from './$types';
  
  // export let data: PageData;
</script>


<div class="bg-white dark:bg-neutral-900 dark:border-neutral-800 border shadow p-6 grid gap-6">
  <div class="text-center">
    <h1 class="text-2xl lg:text-4xl font-bold text-primary-500">Masuk Pengguna</h1>
    <p class="text-secondary-400">Silakan masuk terlebih dahulu</p>
  </div>

  <form action="" class="grid gap-3">
    <label class="block">
      <span class="block font-medium text-gray-500 mb-1">Nama Pengguna</span>
      <input type="text" name="nama_pengguna" class="dark:bg-gray-800 bg-gray-100 border border-gray-300 dark:border-gray-700 h-9 px-3 rounded w-full">
    </label>
    <label class="block">
      <span class="block font-medium text-gray-500 mb-1">Kata Sandi</span>
      <input type="password" name="nama_pengguna" class="dark:bg-gray-800 bg-gray-100 border border-gray-300 dark:border-gray-700 h-9 px-3 rounded w-full">
    </label>

    <button type="submit" class="bg-primary-600 text-white h-9 rounded px-4">Masuk</button>
  </form>
</div>