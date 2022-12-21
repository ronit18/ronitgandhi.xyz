import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Snake Game">
		<Container>
			<Title>Snake Game</Title>
			<P>
				I know you all have played the Snake Game and definitely, you
				never wanted to lose. A snake game is an arcade maze game which
				has been developed by Gremlin Industries and published by Sega
				in October 1976. It is considered to be a skillful game and has
				popularized among people for generations. The snake in the Snake
				game is controlled using the four direction buttons relative to
				the direction it is headed in. The player’s objective in the
				game is to achieve maximum points as possible by collecting food
				or fruits. The player loses once the snake hits the wall or hits
				itself. This snake game is created in python. Python
				module(pygame)
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/Snake-game"
						target="_blank"
					>
						Snake Github <ExternalLinkIcon mx="2px" />
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
				src="/images/projects/snake.gif"
				alt="snakegif"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
