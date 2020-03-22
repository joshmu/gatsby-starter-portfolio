import Typography from "typography"
// import OceanBeachTheme from "typography-theme-ocean-beach"
import ZachliveTheme from "typography-theme-zacklive"

// OceanBeachTheme.overrideStyles = () => {
//   return {
//     a: {
//       textDecoration: "none",
//     },
//   }
// }

const typography = new Typography(ZachliveTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
