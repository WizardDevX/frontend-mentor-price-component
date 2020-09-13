import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
	colors: {
		blue: "#696fdd",
		lightBlue: "#a3a8f0",
		darkGrayBlue: "hsl(232, 13%, 33%)",
		grayBlue: "hsl(233, 13%, 49%)",
		lightGrayBlue: "hsl(234, 14%, 74%)",
		veryLightGrayBlue: "hsl(240, 78%, 98%)",
	},
	gradient: "linear-gradient(to right,#a3a8f0, #696fdd)",
};

render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.querySelector("#root")
);
