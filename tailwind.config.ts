export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink:   '#FF3B6B',
        yellow: '#FFD700',
        blue:   '#00AEEF',
        dark:   '#1A1A2E',
        cream:  '#FFF8F0',
        red:    '#E8002A',
      },
      fontFamily: {
        fredoka: ['"Fredoka One"', 'cursive'],
        nunito:  ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}