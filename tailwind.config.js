const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],
    theme: {
        container: {
            center: true,
            padding: "1.5rem",
        },
        fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            heading: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
