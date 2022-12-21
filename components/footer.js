import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
	return (
		<Box align="center" opacity={0.4} fontSize="sm">
			&copy; {new Date().getFullYear()}. Crafted With ❤️ By RonitGandhi
		</Box>
	);
};

export default Footer;
