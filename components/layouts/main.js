import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";
import VoxelDogLoader from "../voxel-dog-loader";
import dynamic from "next/dynamic";

const LazyVoxelDog = dynamic(() => import("../voxel-dog"), {
	ssr: false,
	loading: () => <VoxelDogLoader />,
});

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="description" content="Ronit Homepage" />
				<meta name="author" content="Ronit Gandhi" />
				<meta name="author" content="Ronit" />
				<link rel="apple-touch-icon" href="apple-touch-icon.png" />
				<link
					rel="shortcut icon"
					href="/favicon.ico"
					type="image/x-icon"
				/>
				<meta name="twitter:title" content="Ronit Gandhi" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ronit20" />
				<meta name="twitter:creator" content="@ronit20" />
				<meta
					name="twitter:image"
					content="https://ronit-portfolio.vercel.app/images/image.jpg"
				/>
				<meta property="og:site_name" content="Ronit Gandhi" />
				<meta name="og:title" content="Ronit Gandhi" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://ronit-portfolio.vercel.app/images/image.jpg"
				/>
				<title>Ronit Gandhi- Homepage</title>
			</Head>

			<NavBar path={router.asPath} />

			<Container maxW="container.md" pt={14}>
				<LazyVoxelDog />
				{/* ThreeJs element */}
				{children}

				<Footer />
			</Container>
		</Box>
	);
};

export default Main;
