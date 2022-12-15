const defaultTheme = require('tailwindcss/defaultTheme');
const defaultColors = require('tailwindcss/colors');

const colors = {
	white: defaultColors.white,
	green: defaultColors.emerald,
	red: defaultColors.rose,
	blue: defaultColors.sky,
	yellow: defaultColors.amber,
	accent: {
		dark: 'rgb(var(--color-accent-dark) / <alpha-value>)',
		base: 'rgb(var(--color-accent-base) / <alpha-value>)'
	},
	canvas: 'rgb(var(--color-canvas) / <alpha-value>)',
	stroke: 'rgb(var(--color-stroke) / <alpha-value>)',
	neutral: {
		25: 'rgb(var(--color-neutral-25) / <alpha-value>)',
		50: 'rgb(var(--color-neutral-50) / <alpha-value>)',
		100: 'rgb(var(--color-neutral-100) / <alpha-value>)',
		200: 'rgb(var(--color-neutral-200) / <alpha-value>)',
		300: 'rgb(var(--color-neutral-300) / <alpha-value>)',
		400: 'rgb(var(--color-neutral-400) / <alpha-value>)',
		500: 'rgb(var(--color-neutral-500) / <alpha-value>)',
		600: 'rgb(var(--color-neutral-600) / <alpha-value>)',
		700: 'rgb(var(--color-neutral-700) / <alpha-value>)',
		800: 'rgb(var(--color-neutral-800) / <alpha-value>)',
		900: 'rgb(var(--color-neutral-900) / <alpha-value>)'
	}
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors,
			borderColor: ({ theme }) => ({
				...theme('colors'),
				DEFAULT: theme('colors.neutral.100')
			}),
			ringColor: ({ theme }) => ({
				...theme('colors'),
				DEFAULT: theme('colors.blue.600')
			}),
			ringOffsetColor: ({ theme }) => ({
				...theme('colors')
			}),
			lineHeight: {
				normal: '1.565'
			},
			letterSpacing: {},
			fontFamily: {
				code: ['Inconsolata', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: []
};
