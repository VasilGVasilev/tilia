/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-tilia":
          "linear-gradient(81.66deg, #f83600 7.21%, #fe8c00 78.07%)",
          "ixora-img-description": "url('/ixora-description.webp')",
      }),
      colors: {
        'tilia-deep-blue': '#111827',
        'tilia-brown': '#464646',
        'tilia-orange': '#ea580c',
        'tilia-white': '#FFFFFF',
        'tilia-yellow-text': '#D29815',
        'tilia-yellow-block': '#FBC54C',
        'tilia-gray': '#F6F6F6',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      boxShadow: {
        '3xl': '0 20px 120px -15px rgba(0, 0, 0, 0.3)',
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
