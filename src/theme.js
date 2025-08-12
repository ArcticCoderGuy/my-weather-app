import { createTheme, alpha } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#8ab4f8" },     // “jäinen Saturnus-sininen”
    secondary: { main: "#b18cff" },   // “rengas-violetti”
    background: {
      default: "#0b1020",
      paper: alpha("#0b1020", 0.6),
    },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          backgroundImage:
            "linear-gradient( to bottom right, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.12)",
        },
      },
    },
    MuiButton: { defaultProps: { variant: "contained" } },
  },
});

export default theme;
