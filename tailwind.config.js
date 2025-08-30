/** @type {import('tailwindcss').Config} */
      module.exports = {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {
                animation: {
                  float: 'float 2s ease-in-out infinite',
                },
                keyframes: {
                  float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-30px)' },
                  },
                },
                fontFamily: {
                  kaushan: ['"Kaushan Script"', 'cursive'],
                  epunda: ['"Epunda Slab"', 'serif'],
                  // agrega más fuentes si quieres
                },
              },

        },
        plugins: [],
      }