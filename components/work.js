import NextLink from "next/link";
import { Heading, Box, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Img } from "@chakra-ui/react";

export const Title = ({ children }) => (
	<Box>
		<NextLink href="/projects" passHref>
			<Link>Projects</Link>
		</NextLink>
		<span>
			{" "}
			<ChevronRightIcon />{" "}
		</span>
		<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
);

export const WorkImage = ({ src, alt, width, height }) => (
	<Img
		placeholder="blur"
		borderRadius="lg"
		w="full"
		src={src}
		alt={alt}
		height={height}
		width={width}
		mb={4}
	/>
);

export const Meta = ({ children }) => (
	<Badge colorScheme="green" mr={2}>
		{children}
	</Badge>
);
