import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Weather app">
		<Container>
			<Title>Weather app</Title>
			<P>
				Weather is something that never remains constant. Getting to
				know precise weather conditions helps people to plan out their
				daily schedule. With weather forecasting technology reaching to
				the skies, dissemination of the forecast to has taken diverse
				routes. Weather app development is one such happy fallout.
				Weather apps enable users to get instant alerts regarding
				weather conditions. Weather apps are the simplest method to know
				about the updates of the upcoming weather.
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/weatherapp"
						target="_blank"
					>
						Weather app Github <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<Badge>NextJS</Badge>
					&nbsp;
					<Badge>TailwindCSS</Badge>
					&nbsp;<Badge>Open Weather Api</Badge>
				</ListItem>
			</List>
			<br />
			<WorkImage
				placeholder="blur"
				src="/images/projects/fullscreen.png"
				alt="weatherfullscreen"
			/>
			<WorkImage
				placeholder="blur"
				src="/images/projects/vapi.png"
				alt="weathervapi"
			/>
			<WorkImage
				placeholder="blur"
				src="/images/projects/london.png"
				alt="weatherlondon"
			/>

			<WorkImage
				placeholder="blur"
				src="/images/projects/mumbai.png"
				alt="weathermumbai"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
