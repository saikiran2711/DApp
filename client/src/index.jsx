import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
=======
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
>>>>>>> origin/newfolderstructure
