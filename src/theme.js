import { createTheme } from "@material-ui/core";

// colors
const primary = "#30D0B6";
const black = "#08134A";
const darkBlack = "rgb(36, 40, 44)";
const background = "#F9F9F9";
const warningLight = "rgba(253, 200, 69, .3)";
const warningMain = "rgba(253, 200, 69, 1)";
const warningDark = "rgba(253, 200, 69, .7)";
const danger = "#FF3D3D";
const darkBackground = "#f2f2f2";

// border
const borderWidth = 2;
const borderColor = "rgba(0, 0, 0, 0.13)";

// spacing
const spacing = 8;

const theme = createTheme({
  palette: {
    primary: {
      light: "#59d9c4",
      main: "#30D0B6",
      dark: "#21917f",
      contrastText: "#fff",
    },
  },
});
export default theme;
