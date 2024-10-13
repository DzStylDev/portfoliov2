/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-lg': {'max': '1629px'}, 
        'min-sm': { 'min': '200px' },
      },
      backgroundColor: {
        'primary-bg': "#2a2f3f",
        "section-moi": "#0d348a",
        "section-competences": "#2a4d9b",
        "section-de-professionel" : "#6bda5e",
        "section-findMe": "#2a699b",
        "section-projetcs": "#427dad",
        "section-contact": "#12bf95",
        "section-centre-interet": "#0c6851",
        "section-langues": "#020472",
        "button-bg": "#1f2937",
        "button-hover-bg": "#425069"
      },
      backgroundImage: {
        'my-gradient': 'linear-gradient(to right, #1f2937, #2e3f5c)',
    },
      fontSize : {
        "section-title": "1.2em"
      },
      fontFamily: {
        'pol1': ['Roboto']
      }
    },
  },
  plugins: [],
}

