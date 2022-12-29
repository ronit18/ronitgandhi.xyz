import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Qtile">
		<Container>
			<Title>Qtile Config</Title>
			<P>
				Qtile is a window manager written in python. Qtile is simple,
				small and extensible. It's easy to write your own layouts,
				widgets and commands. This is a Qtile config 'riced' as in
				powerline style.
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/qtile"
						target="_blank"
					>
						Qtile <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<span>
						<Badge>Python</Badge>
						&nbsp;
					</span>
				</ListItem>
			</List>
			<br />

			<WorkImage
				placeholder="blur"
				src="/images/projects/qtile.gif"
				alt="qtilemain"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
