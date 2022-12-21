import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Lyriks">
		<Container>
			<Title>Lyriks</Title>
			<P>
				Lyriks a modern UI Music app with homepage, fully-fledged music
				player, search, lyrics, song exploration features, search,
				popular music around you, worldwide top charts, and much more..
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link
						target="_blank"
						href="https://ronit-lyriks.netlify.app/"
					>
						Lyriks
						<ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/Lyriks"
						target="_blank"
					>
						Lyriks Github <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<Badge>Vite</Badge>
					&nbsp;
					<Badge>ReactJS</Badge>
					&nbsp;
					<Badge>TailwindCSS</Badge>
					&nbsp;<Badge>RapidApi (ShazamCoreApi)</Badge>
				</ListItem>
			</List>
			<br />
			<WorkImage
				placeholder="blur"
				src="/images/projects/lyrikshome.gif"
				alt="lyrikshome"
			/>
			<WorkImage
				placeholder="blur"
				src="/images/projects/lyriksartist.gif"
				alt="lyriksartist"
			/>
			<WorkImage
				placeholder="blur"
				src="/images/projects/lyrikssearch.gif"
				alt="lyrikssearch"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
