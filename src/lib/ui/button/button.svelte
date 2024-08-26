<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	interface Other {
		variant?: 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info';
		ghost?: boolean;
		alternatif?: boolean;
	}
	interface $$Props extends HTMLButtonAttributes, Other {}

	export let variant: $$Props['variant'] = 'danger',
		ghost: $$Props['ghost'] = false,
		alternatif: $$Props['alternatif'] = true;
</script>

<button type="button" class={cn('base', variant, { ghost, alternatif }, $$props.class)}>
	<slot />
</button>

<style lang="postcss">
	.base {
		@apply h-9 scale-100 text-nowrap rounded px-4 shadow transition-colors;
		&:focus {
			@apply outline-none ring;
		}
		&:active {
			@apply opacity-90;
		}

		&:disabled {
			@apply pointer-events-none opacity-60;
		}

		&.default {
			@apply bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-400/50;
			&.ghost {
				@apply text-gray-600 hover:bg-gray-200 focus:bg-gray-200;
			}
			&.alternatif {
				@apply bg-gray-100 text-gray-600 hover:bg-gray-200 focus:bg-gray-200 focus:ring-0;
			}
		}

		&.primary {
			@apply bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-400/50;
			&.ghost {
				@apply text-primary-600 hover:bg-primary-100 focus:bg-primary-100;
			}
			&.alternatif {
				@apply bg-primary-100 text-primary-600 hover:bg-primary-200 focus:bg-primary-200 focus:ring-0;
			}
		}

		&.success {
			@apply bg-success-600 text-white hover:bg-success-700 focus:ring-success-400/50;
			&.ghost {
				@apply text-success-600 hover:bg-success-100 focus:bg-success-100;
			}
			&.alternatif {
				@apply bg-success-100 text-success-600 hover:bg-success-200 focus:bg-success-200 focus:ring-0;
			}
		}

		&.danger {
			@apply bg-danger-600 text-white hover:bg-danger-700 focus:ring-danger-400/50;
			&.ghost {
				@apply text-danger-600 hover:bg-danger-100 focus:bg-danger-100;
			}
			&.alternatif {
				@apply bg-danger-100 text-danger-600 hover:bg-danger-200 focus:bg-danger-200 focus:ring-0;
			}
		}

		&.warning {
			@apply bg-warning-600 text-white hover:bg-warning-700 focus:ring-warning-400/50;
			&.ghost {
				@apply text-warning-600 hover:bg-warning-100 focus:bg-warning-100;
			}
			&.alternatif {
				@apply bg-warning-100 text-warning-600 hover:bg-warning-200 focus:bg-warning-200 focus:ring-0;
			}
		}

		&.info {
			@apply bg-info-600 text-white hover:bg-info-700 focus:ring-info-400/50;
			&.ghost {
				@apply text-info-600 hover:bg-info-100 focus:bg-info-100;
			}
			&.alternatif {
				@apply bg-info-100 text-info-600 hover:bg-info-200 focus:bg-info-200 focus:ring-0;
			}
		}

		&.ghost,
		&.alternatif {
			@apply bg-transparent shadow-none;
		}
	}
</style>
