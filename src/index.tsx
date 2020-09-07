import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		primary: "hsl(322, 100%, 66%)",
		cyan: "hsl(193, 100%, 96%)",
		darkCyan: "hsl(192, 100%, 9%)",
		grayBlue: "hsl(208, 11%, 55%)",
	},
};

render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.querySelector("#root")
);
