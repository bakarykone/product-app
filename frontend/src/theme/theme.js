import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      color: "#1976d2",
    },
    body1: {
      color: "#555555",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      color: "#90caf9",
    },
    body1: {
      color: "#ffffff",
    },
  },
});
