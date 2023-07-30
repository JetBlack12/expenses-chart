/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'soft-red':'hsl(10, 79%, 65%)',
        'hs':'hsl(10, 79%, 65%,0.8)',
        'cyan':'hsl(186, 34%, 60%,0.8)',
        'dark-brown':'hsl(25, 47%, 15%)',
        'med-brown':'hsl(28, 10%, 53%)',
        'cream':'hsl(27, 66%, 92%)',
        'pale-orange':'hsl(33, 100%, 98%)',
        'dmb':'hsl(217, 100%, 61%,0.5)',
        'dmr':'hsl(0, 69%, 50%)'
      },
      fontFamily:{
        SansBold:"SansBold",
        Sans:"Sans"
      }

    },
  },
  plugins: [],
}

