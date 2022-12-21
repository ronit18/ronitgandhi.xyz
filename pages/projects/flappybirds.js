import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Flappy Birds">
		<Container>
			<Title>Flappy Birds</Title>
			<P>
				Flappy-Bird is a game just like android lolipop game in android
				settings. In which we are bird and there are two pipes (Top &
				Bottom), Each time we dodge pipes we get a score.
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/Flappy-Bird-Game"
						target="_blank"
					>
						Flappy Birds Github <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<span>
						<Badge>Python</Badge>
						&nbsp;
						<Badge>Python Module (pygame)</Badge>
					</span>
				</ListItem>
			</List>
			<br />

			<WorkImage
				placeholder="blur"
				src="/images/projects/flappybirds.gif"
				alt="flappybirds"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
