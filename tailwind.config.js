/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      fontSize: {
        xxs: ['10px', '12px']
      },
      backgroundImage: (theme) => ({
        "gradient-tilia":
          "linear-gradient(81.66deg, #f83600 7.21%, #fe8c00 78.07%)",
        "tilia-img-walking-people": "url('/tilia/tilia-walking-people.webp')",
      }),
      colors: {
        'tilia-deep-blue': '#111827',
        'tilia-brown': '#464646',
        'tilia-orange': '#ea580c',
        'tilia-white': '#FFFFFF',
        'tilia-black': '#000000',
        'tilia-yellow-text': '#D29815',
        'tilia-yellow-block': '#FBC54C',
        'tilia-gray': '#F6F6F6',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      boxShadow: {
        '3xl': '0 20px 120px -15px rgba(0, 0, 0, 0.3)',
        'inner-xl': 'inset 0 0 15px 10px rgba(0,0,0,0.1)',
        'inner-3xl': 'inset 0 0 10px 10px rgba(0,0,0,0.3)'

      },
      width: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
