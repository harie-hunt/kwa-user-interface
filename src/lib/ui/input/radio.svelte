<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import MsgError from './msg-error.svelte';
	import { cn } from '$lib/utils/cn';

	type Other = {
		label: string;
		errors?: string[];
		selected?: string;
		options: [string, string][];
	};
	interface $$Props extends HTMLInputAttributes, Other {}

	export let label: $$Props['label'],
		options: $$Props['options'],
		selected: $$Props['selected'] = undefined,
		errors: $$Props['errors'] = undefined;
</script>

<div class={cn('_main', { errors })}>
	<span class="_label">{label}</span>

	<div class="_radio">
		{#each options as opt}
			<label>
				<input type="radio" bind:group={selected} {...$$props} value={opt[1]} hidden />
				{opt[0]}
			</label>
		{/each}
	</div>

	<MsgError {errors} />
</div>

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

	._radio {
		@apply flex items-center gap-3;

		& label {
			@apply relative flex cursor-pointer items-center ps-6;

			&::before {
				content: '';
				@apply absolute left-0 h-5 w-5 rounded-full border-2 border-primary-500 bg-white;
			}
		}

		& label:has(input:checked)::before {
			@apply bg-primary-500 outline outline-2 -outline-offset-4 outline-white;
		}
	}
</style>
