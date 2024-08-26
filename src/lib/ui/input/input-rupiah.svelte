<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import MsgError from './msg-error.svelte';
	import { cn } from '$lib/utils/cn';

	type Other = {
		label: string;
		errors?: string[];
	};
	interface $$Props extends HTMLInputAttributes, Other {}

	export let label: $$Props['label'],
		errors: $$Props['errors'] = undefined;

	let numberValue = 0,
		textValue = '';

	const formatter = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 });

	$: if (textValue) {
		let t1 = Number(textValue.replace(/\./g, ''));
		textValue = formatter.format(t1);
		numberValue = t1;
	}
</script>

<label class={cn('_main', { errors })}>
	<span class="_label">{label}</span>
	<div class="_group">
		<span class="_rp">Rp.</span>
		<input type="text" bind:value={textValue} {...$$props} class="_input" />
	</div>
	<MsgError {errors} />
</label>
<input type="number" hidden name={$$props.name} value={numberValue} />

<style lang="postcss">
	._main {
		@apply block;

		& ._label {
			@apply mb-1 block font-medium;
		}

		& ._input {
			@apply h-9 w-full appearance-none rounded border bg-slate-100 px-3 leading-tight;
			&:focus {
				@apply border-slate-400 bg-transparent outline-none ring-1 ring-primary-200;
			}
		}
	}

	._main.errors {
		& ._label {
			@apply text-danger-500;
		}

		& ._input {
			@apply border-danger-500;
			&:focus {
				@apply border-danger-500 ring-danger-300;
			}
		}
	}

	._group {
		@apply relative flex items-center;

		& ._rp {
			@apply absolute left-3;
		}

		& ._input {
			@apply ps-10;
		}
	}
</style>
