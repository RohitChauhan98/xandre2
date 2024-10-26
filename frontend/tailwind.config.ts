import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '680': '680px', // Adding a custom backdrop blur for 680px
      },
      backgroundImage: {
        'bronze-border-gradient': 'linear-gradient(to right, #A77942 0%, #E2B783 50%, #A77942 100%)',
        "bronze-gradient-fill": "linear-gradient(to bottom, #A77942 0%, #E2B783 50%, #A77942 100%)",
        "xandre-experience-gradient": "linear-gradient(to bottom, #FFFFFF 0%, #E0EBF5 100%)",
        "blue-gold-gradient": 'linear-gradient(to left, #C69A65, #192741)',
        "hotel-info":  'linear-gradient(90deg, #ECF0F3 0%, #F9F1E7 100%)',

        'button-gradient': 'linear-gradient(to right, #8FC8FF, #F0D2A0)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-intro": "linear-gradient(to right, #8291A0, #FAE2C6)",
        "gradient-text-primary":
          "linear-gradient(270deg, #A77942 0%, #E2B783 50%, #A77942 100%)",
        "gradient-text-secondary":
          "linear-gradient(180deg, #A77942 0%, #E2B783 50%, #A77942 100%)",
        "gradient-dest": "linear-gradient(270deg, #C69A65 0%, #192741 100%)",
        "gradient-glass":"linear-gradient(90deg, #8291A0 0%, #FAE2C6 100%)",
        "gradient-login": `
        radial-gradient(circle at top left, #ffffff, rgba(255, 255, 255, 0) 70%),
        radial-gradient(circle at bottom left, #192741, rgba(25, 39, 65, 0) 70%),
        radial-gradient(circle at top right, #C69A65, rgba(198, 154, 101, 0) 70%)
      `,
        
      },
      fontFamily: {
        "nebras-serif": ["Nebras Serif", "serif"],
        "nebras-serif-regular": ["Nebras Serif regular", "serif"],
        raleway: ["Raleway", "sans-serif"],
        noto: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        "primary-500": "#192741",
        "primary-300": "#3B5484",
        "glass-100": "#EFF7FF",
        "glass-200": "#D2DBE4",
        "glass-300": "#A2B1C0",
        
        "gold-200": "#A77942",
        
        'input-100':'#ECF0F3',
        'input-200':"#A2B1C0",
        'input-300':'#576676',
        
        "oxford-blue": "#192741",
        "oxford-blue-shade-04":"#141B29",

        'lion-200':'#C69A65',
        
        'trans-100':"#D9D9D9",
        'white-shade': "#7F7F7F",
        "white-shade-2":"#F5F5F5",

        'alice-blue-200': "#D2DBE4",
        'alice-blue-400': "#8291A0"

      },
      fontSize:{
        "100": "13.5",
        "h3":"22px"
      }
    },
  },
  plugins: [
  
  ],
};
export default config;
