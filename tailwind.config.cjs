module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cherry: '#e296b2',
        oil: '#feecde',
        coal: '#282828',
        candy: '#97181a'
      },
      fontFamily: {
        /* use Playfair Display as the primary site font for both body and display to simplify typography */
        display: ['"Playfair Display"', 'serif'],
        body: ['"Playfair Display"', 'serif'],
        league: ['"League Gothic"', 'ui-sans-serif', 'system-ui'],
        playfair: ['"Playfair Display"', 'serif']
      }
    }
  },
  plugins: []
}
