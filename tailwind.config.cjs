function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: "640px",
    },

    // Uncomment the following extend
    // if existing Tailwind color palette will be used

    // extend: {
    textColor: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-fill"),
      },
    },
    backgroundColor: {
      skin: {
        fill: withOpacity("--color-fill"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-text-base"),
        card: withOpacity("--color-card"),
        "card-muted": withOpacity("--color-card-muted"),
      },
    },
    outlineColor: {
      skin: {
        fill: withOpacity("--color-accent"),
      },
    },
    borderColor: {
      skin: {
        line: withOpacity("--color-border"),
        fill: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
        muted: withOpacity("--color-card-muted"),
      },
    },
    fill: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-fill"),
      },
      transparent: "transparent",
    },
    // gradient: {
    //   pink: {
    //     color: withOpacity("--color-card-muted"),
    //   },
    //   blue: {
    //     color: withOpacity("--color-accent")
    //   },
    // },
    fontFamily: {
      // mono: ["IBM Plex Mono", "monospace"],
      sans: ["Lato", "sans-serif"],
    },
    // },
  },
  plugins: [require("@tailwindcss/typography")],
};
