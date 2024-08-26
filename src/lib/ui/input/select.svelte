<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import MsgError from './msg-error.svelte';
	import { cn } from '$lib/utils/cn';
	import { fade, fly } from 'svelte/transition';

	type Other = {
		label: string;
		errors?: string[];
		selected?: string;
		options: [string, string][];
	};
	interface $$Props extends HTMLInputAttributes, Other {}

	export let label: $$Props['label'],
		selected: $$Props['selected'] = undefined,
		errors: $$Props['errors'] = undefined,
		options: $$Props['options'];

	let displayValue = 'Pilih !',
		isOpen = false;

	function handleClick(opt: [string, string]) {
		displayValue = opt[0];
		selected = opt[1];
	}
</script>

<label class={cn('_main', { errors })}>
	<span class="_label">{label}</span>

	<div class="_group">
		<input
			type="text"
			{...$$props}
			value={displayValue}
			on:click={() => (isOpen = !isOpen)}
			on:blur={() => setTimeout(() => (isOpen = false), 100)}
			class="_input"
			readonly
		/>

		{#if isOpen}
			<div transition:fly={{ y: -20 }} class="_options">
				{#each options as opt}
					<label>
						<input
							type="radio"
							on:click={() => handleClick(opt)}
							name="r-{opt[1]}"
							hidden
							checked={selected == opt[1]}
						/>
						{opt[0]}
					</label>
				{/each}
			</div>
		{/if}
	</div>

	<MsgError {errors} />
</label>

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
		@apply relative;

		& ._input {
			@apply cursor-pointer;
		}

		& ._options {
			@apply absolute inset-x-0 mt-1 max-h-40 overflow-y-auto rounded border bg-white p-1;

			& label {
				@apply block cursor-pointer rounded px-3 py-1.5;

				&:hover {
					@apply bg-gray-100;
				}

				&:has(input:checked) {
					@apply bg-primary-50 text-primary-500;
				}
			}
		}
	}
</style>
