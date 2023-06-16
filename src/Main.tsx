import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { shallowEqual } from "react-redux";
import App from "./App";
// import { ErrorProvider } from './context/ErrorController'
import { useAppDispatch } from "./hooks/reduxHooks";
// import { setThroughIFrame } from "./redux/Slices/appSlice";

interface Props {}

const Main = (props: Props) => {
  const dispatch = useAppDispatch();

  const theme = createTheme({
    palette: {
      text: {
        primary: "#e8e8e8",
        secondary: "#e8e8e8",
      },
      primary: {
        main: "#e8e8e8",
        contrastText: "#ffcc00",
      },
      secondary: {
        main: "rgba(6, 105, 248, 1)",
      },
    },
    typography: {
      fontFamily: ["Montserrat-Regular"].join(","),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default Main;
