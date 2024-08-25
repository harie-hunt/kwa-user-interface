<script lang="ts">
	import { assets } from '$app/paths';
</script>

<div class="main">
	<img src="{assets}/fav_koperasi.png" alt="Logo Koperasi" class="h-5 w-5" />
	<h2 class="hidden lg:block">Koperasi Wanita Anggrek</h2>
	<h2 class="block lg:hidden">KWA</h2>
</div>

<style lang="postcss">
	.main {
		@apply flex items-center gap-2 px-3;
	}
</style>
