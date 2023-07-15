export default {
    content: ['./src/**/*.{html,js,tsx,astro}'],
    theme: {

        colors: {
            'blue': '#1fb6ff',
            'purple': '#7e5bef',
            'pink': '#ff49db',
            'orange': '#ff7849',
            'green': '#13ce66',
            'yellow': '#ffc82c',
            'gray-dark': '#273444',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'white': '#fff',
            'transparent': 'transparent',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            screens: {
                '3xl': '1600px',
                '4xl': '2000px',
                '5xl': '2400px',
                '6xl': '2800px',
            }
        }
    },
}