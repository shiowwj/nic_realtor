import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/{app,ui}/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				ink: '#133B78',
				canvas: '#fff',

				accent: '#133B78',
				altAccent: '#EFA939',
			},
			fontFamily: {},
			maxHeight: {
				fold: 'calc(100svh - var(--header-height))',
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('header-open', 'body:has(#header-open:checked) &')
			addVariant('header-closed', 'body:has(#header-open:not(:checked)) &')
		}),
	],
	safelist: [{ pattern: /action.*/ }, 'ghost'],
}

export default config