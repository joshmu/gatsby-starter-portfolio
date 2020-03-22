import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
})

// typography.overrideStyles = () => {
//   return {
//     a: {
//       textDecoration: "none",
//     },
//   }
// }

// Insert styles directly into the <head>
typography.injectStyles()

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
