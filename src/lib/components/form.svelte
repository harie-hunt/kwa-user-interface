<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils/cn';
	import type { ActionResult } from '@sveltejs/kit';
	import type { HTMLFormAttributes } from 'svelte/elements';

	interface $$Props extends HTMLFormAttributes {}

	let loading = false;

	async function onSubmit(result: ActionResult, reset: () => void) {
		loading = false;
		console.log('Form result: ', result);

		if (result.type === 'success') {
			reset();
		}

		if (result.type === 'failure') {
		}
		if (result.type === 'redirect') goto(result.location);
	}
</script>

{#if loading}
	<div class="fixed inset-0 flex items-center justify-center bg-black/25">
		<p class="rounded bg-white px-3 py-1">proses..</p>
	</div>
{/if}

<form
	action=""
	method="post"
	{...$$props}
	class={cn('base', $$props.class)}
	use:enhance={({ formElement }) => {
		loading = true;
		return async ({ result }) => onSubmit(result, () => formElement.reset());
	}}
>
	<slot />
</form>

<style lang="postcss">
	.base {
		@apply grid gap-3;
	}
</style>
