import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const dark = `linear-gradient(90deg, rgba(0,16,19,1) 54%, rgba(4,65,89,1) 88%)

 `;

const styles = {
	global: (props) => ({
		body: {
			bg: mode("#f0e7db", dark)(props),
		},
	}),
};

const components = {
	Heading: {
		variants: {
			"section-title": {
				textDecoration: "underline",
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: "#525252",
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4,
			},
		},
	},
	Link: {
		baseStyle: (props) => ({
			color: mode("#3d7aed", "#ff63c3")(props),
			textUnderlineOffset: 3,
		}),
	},
};

const fonts = {
	heading: "'M PLUS Rounded 1c'",
};

const colors = {
	grassTeal: "#88ccca",
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
