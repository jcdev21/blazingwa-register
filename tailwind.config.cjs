/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			container: {
				center: true,
				padding: '1rem',
			},
		},
	},
	plugins: [],
};
