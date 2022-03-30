import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createTheme } from "@mui/material/styles";
// import App from "./App";
import SignUpFormBox from "./SignUp";
import { ThemeProvider } from "@emotion/react";
const theme = createTheme({
  palette: {
    login: {
      main: "#26e2d9",
    },
    error:{
        main:'#FF0000'
    }
  },
});

// import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SignUpFormBox />
  </ThemeProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
