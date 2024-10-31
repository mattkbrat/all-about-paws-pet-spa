//
export default {
	content: ["./src/**/*.{html,js,tsx,astro}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1920px",
		},
		extend: {
			fontFamily: {
				display: ["Oswald-Light", "sans-serif"],
				heading: ["Oswald", "sans-serif"],
				body: ["Noto Sans Regular", "sans-serif"],
			},
			spacing: {
				"8xl": "96rem",
				"9xl": "128rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			colors: {
				gray: {
					50: "#f6f6f6",
					100: "#e7e7e7",
					200: "#d1d1d1",
					300: "#b0b0b0",
					400: "#808080",
					500: "#6d6d6d",
					600: "#5d5d5d",
					700: "#4f4f4f",
					800: "#454545",
					900: "#3d3d3d",
					950: "#262626",
				},
			},
		},
	},
};
