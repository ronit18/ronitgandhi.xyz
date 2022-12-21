import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Tetris Game">
		<Container>
			<Title>Tetris Game</Title>
			<P>
				A simple tetris game using python pygame module. The Tetris game
				consists of blocks/tetriminos, of different shapes. that appear
				one after another. And the objective is to place these blocks on
				the screen such that we form rows at the bottom of the board.
				Every completed row increases the score. To do so, the player
				will be allowed to move the falling block to left, right, down
				and also rotate it using the keyboard buttons.
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/Tetris-Game"
						target="_blank"
					>
						Tetris Game Github <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<Badge>Python</Badge>
					&nbsp;
					<Badge>Python Module (pygame)</Badge>
				</ListItem>
			</List>
			<br />

			<WorkImage
				placeholder="blur"
				src="/images/projects/tetris.gif"
				alt="tetrisgif"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
