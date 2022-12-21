import React from "react";
import {
	Link,
	Heading,
	Box,
	Button,
	useColorModeValue,
	chakra,
} from "@chakra-ui/react";

import Image from "next/image";

const ProfileImage = chakra(Image, {
	shouldForwardProp: (prop) =>
		["width", "height", "src", "alt"].includes(prop),
});

const Home = () => {
	return (
		<>
			<Box
				borderRadius="lg"
				mb={6}
				p={3}
				textAlign="center"
				bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
				css={{ backdropFilter: "blur(10px)" }}
			>
				<Heading>Ronit Gandhi</Heading>
				<Link href="https://links.ronitgandhi.xyz" target="_blank">
					<Button
						aria-label="biopage-link"
						variant="ghost"
						colorScheme="teal"
					>
						@ronitgandhi
					</Button>
				</Link>

				<p>
					{" "}
					Digital Craftsman <br />
					(Artist / Developer / Designer)
				</p>
				<br />
			</Box>{" "}
			<Box>
				<Box
					flexShrink={0}
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					textAlign="center"
				>
					<Box
						borderColor="whiteAlpha.800"
						borderWidth={2}
						borderStyle="solid"
						w="250px"
						h="250px"
						display="inline-block"
						borderRadius="full"
						overflow="hidden"
					>
						<ProfileImage
							src="/image.jpg"
							alt="Profile image"
							borderRadius="full"
							width={250}
							height={250}
						/>
					</Box>
				</Box>
			</Box>
			<br />
		</>
	);
};

export default Home;
