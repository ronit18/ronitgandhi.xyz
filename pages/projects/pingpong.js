import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Ping Pong">
		<Container>
			<Title>Ping Pong Game</Title>
			<P>
				This is a Old-School PingPong Game. Table Tennis (called ping
				pong in the USA) is one of the most popular retro 2d game in
				computer. It is a 2v2 game. Made using Basic Python(While loop,
				functions, If-Else Condition statement) and Turtle(Python
				Module).
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/Ping-Pong-Game"
						target="_blank"
					>
						PingPong Github <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<Badge>Python</Badge>
					&nbsp;
					<Badge>Python Module (Turtle)</Badge>
				</ListItem>
			</List>
			<br />

			<WorkImage
				placeholder="blur"
				src="/images/projects/pingpong.gif"
				alt="pingponggif"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
