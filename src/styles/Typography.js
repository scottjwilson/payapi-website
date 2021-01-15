import Typography from "typography"
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "DM Serif Display",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Public Sans", "Georgia", "serif"],
  googleFonts: [
    {
      name: "Public Sans",
      styles: ["100", "400", "400i", "700", "700i"],
    },
    {
      name: "DM Serif Display",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
})
export default typography
