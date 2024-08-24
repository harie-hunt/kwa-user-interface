import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
      colors:{
        primary:colors.blue,
        secondary:colors.gray,
        danger:colors.red,
        success:colors.green,
        warning:colors.yellow,
        info:colors.cyan
      }
    }
	},
	plugins: []
};
