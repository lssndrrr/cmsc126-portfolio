// tailwind.config.js
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        neon: "#ff00ff",
        dark: "#0d0d0d",
        cyan: "#00ffff",
      },
      fontFamily: {
        neon: ["Neonderthaw", "cursive"],
        sans: ["Inter Tight", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 15px #ff00ff, 0 0 30px #ff00ff",
        cyanSoft: "0 0 8px #00ffff, 0 0 12px #00ffff",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px #ff00ff" },
          "50%": { boxShadow: "0 0 20px #ff00ff, 0 0 30px #ff00ff" },
        },
        glowSoft: {
          "0%, 100%": { boxShadow: "0 0 4px #00ffff" },
          "50%": { boxShadow: "0 0 8px #00ffff, 0 0 12px #00ffff" },
        },
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0" },
        },
      },
      animation: {
        flicker: "flicker 2s infinite",
        glow: "glow 2s infinite ease-in-out",
        glowSoft: "glowSoft 2s infinite ease-in-out",
        flip: "flip 0.6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
