/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primaryBlue: "hsl(215, 51%, 70%)",
			primaryCyan: "hsl(178, 100%, 50%)",
			mainBG: "hsl(217, 54%, 11%)",
			cardBG: "hsl(216, 50%, 16%)",
			line: "hsl(215, 32%, 27%)",
			white: "hsl(0, 0%, 100%)",
		},
		fontFamily: {
			Outfit: ["Outfit", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
