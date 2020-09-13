/// <reference types="react-scripts" />

import {} from "styled-components/cssprop";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			blue: string;
			lightBlue: string;
			darkGrayBlue: string;
			grayBlue: string;
			lightGrayBlue: string;
			veryLightGrayBlue: string;
		};
		gradient: string;
	}
}
