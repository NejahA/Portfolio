/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          white: "#fff",
          black: "#000",
          gray: "#828282",
          gainsboro: {
            "100": "#e6e6e6",
            "200": "#e0e0e0",
          },
        },
        spacing: {
          "spacing-m": "48px",
        },
        fontFamily: {
          "body-text": "Inter",
        },
      },
      fontSize: {
        xl: "20px",
        "5xl": "24px",
        "45xl": "64px",
        base: "16px",
        inherit: "inherit",
      },
      screens: {
        sm: {
          max: "420px",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  