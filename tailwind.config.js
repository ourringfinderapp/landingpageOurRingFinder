export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
		},
		extend: {
			colors: {
				dark: {
					bg: '#0a0a0a',
					border: '#2d2d2d',
					card: '#1a1a1a',
				},
				gray: {
					text: '#a0aec0',
					muted: '#8b95a5',
					border: '#4a5568',
					subtle: '#6b7280',
				}
			},
		},
	},
}
