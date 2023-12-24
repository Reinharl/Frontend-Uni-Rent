/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                light: "#F6F6F6",
                dark: "#020617",
                primary: "#109901"
            },
        },
    },
    plugins: [],
}