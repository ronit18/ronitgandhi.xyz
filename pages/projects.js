import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbCodyai from "../public/images/projects/codyai.jpg";
import thumbMultiversus from "../public/images/projects/multiverse.png";
import thumbWeather from "../public/images/projects/weather.png";
import thumbRetrograde from "../public/images/projects/retrograde.jpg";
import thumbLyriks from "../public/images/projects/lyriks.jpg";
import thumbNews from "../public/images/projects/news.png";
import thumbXmonad from "../public/images/projects/xmonad.png";
import thumbPingPong from "../public/images/projects/pingpong.jpeg";
import thumbFlappyBirds from "../public/images/projects/flappybirds.jpg";
import thumbNetflix from "../public/images/projects/netflixhome.png";
import thumbQtile from "../public/images/projects/qtile.jpg";
import thumbFacedetection from "../public/images/projects/facedetection.jpg";
import thumbTetris from "../public/images/projects/tetris.png";
import thumbSnake from "../public/images/projects/snake.jpg";
import thumbIndia from "../public/images/projects/india.jpg";

let index = 0;
const work = [
	{
		key: index++,
		id: "codyai",
		title: "CodyAi 🤖",
		description: "A coding helper bot.",
	},
	{
		key: index++,
		id: "multiversus",
		title: "Multiversus 🌀",
		description: "A modern Ui and Modern Webpage.",
	},
	{
		key: index++,
		id: "lyriks",
		title: "Lyriks 🎵",
		description: "Lyriks a Music Listeaning App.",
	},
	{
		key: index++,
		id: "weather",
		title: "Weather App 🌩️",
		description: "WeatherApp made by NextJs",
	},
	{
		key: index++,
		id: "retrograde",
		title: "Retrograde Coffee ☕",
		description: "Retrograde Coffee a website for coffee shop",
	},

	{
		key: index++,
		id: "flappybirds",
		title: "Flappy Birds Game 🐦",
		description: "Flappy Birds Game made by Python.",
	},

	{
		key: index++,
		id: "netflix",
		title: "Netflix Clone 🐾",
		description:
			"Netflix Clone using React, TailwindCSS, Firebase backend.",
	},
	{
		key: index++,
		id: "qtile",
		title: "Qtile Config",
		description: "Qtile tiling window manager config made in python.",
	},

	{
		key: index++,
		id: "facedetection",
		title: "Facial Landmark Detection 🙂",
		description: "Facial Landmark Detection using Python.",
	},

	{
		key: index++,
		id: "xmonad",
		title: "Xmonad config",
		description: "Xmonad tiling window manager config made in haskell",
	},
	{
		key: index++,
		id: "tetris",
		title: "Tetris Game 🗳️",
		description: "Tetris is a puzzle video game made by Python.",
	},

	{
		key: index++,
		id: "news",
		title: "NewsApp 🗞️",
		description: "A news app made by NewsApi to get daily news.",
	},

	{
		key: index++,
		id: "pingpong",
		title: "Ping Pong Game 🏓",
		description: "Old school ping pong made in Python.",
	},

	{
		key: index++,
		id: "snake",
		title: "Snake Game 🐍",
		description: "Snake Game made in Python.",
	},

	{
		key: index++,
		id: "indianflag",
		title: "Indian Flag 🇮🇳",
		description: "Indian Flag made in Python.",
	},
];
const thumb = (id) => {
	if (id === "codyai") {
		return thumbCodyai;
	} else if (id === "multiversus") {
		return thumbMultiversus;
	} else if (id === "lyriks") {
		return thumbLyriks;
	} else if (id === "weather") {
		return thumbWeather;
	} else if (id === "retrograde") {
		return thumbRetrograde;
	} else if (id === "flappybirds") {
		return thumbFlappyBirds;
	} else if (id === "netflix") {
		return thumbNetflix;
	} else if (id === "qtile") {
		return thumbQtile;
	} else if (id === "facedetection") {
		return thumbFacedetection;
	} else if (id === "xmonad") {
		return thumbXmonad;
	} else if (id === "tetris") {
		return thumbTetris;
	} else if (id === "news") {
		return thumbNews;
	} else if (id === "pingpong") {
		return thumbPingPong;
	} else if (id === "snake") {
		return thumbSnake;
	} else if (id === "indianflag") {
		return thumbIndia;
	}
};
const Projects = () => (
	<Layout title="Projects">
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Projects
			</Heading>

			<SimpleGrid columns={[1, 1, 2]} gap={6}>
				{work.map(({ key, id, title, description }) => (
					<Section key={key}>
						<WorkGridItem
							id={id}
							title={title}
							thumbnail={thumb(id)}
						>
							{description}
						</WorkGridItem>
					</Section>
				))}
			</SimpleGrid>
		</Container>
		<br />
	</Layout>
);

export default Projects;
export { getServerSideProps } from "../components/chakra";
