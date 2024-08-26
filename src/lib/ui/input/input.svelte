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
</script>

<label class={cn('_main', { errors })}>
	<span class="_label">{label}</span>
	<input type="text" {...$$props} class="_input" />
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
</style>
