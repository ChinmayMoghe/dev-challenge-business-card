/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html'],
  theme: {
    extend: {
      colors:{
        white:'#fff',
        mist:'#f2f5f9',
        'midnight-blue':'#111729',
        'slate-gray':'#677489',
        
      }
    },
    fontFamily: {
      lato:['Lato', 'sans-serif'],
      poppins:['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

