import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Projects = () => (
	<Layout title="Retrograde Coffee">
		<Container>
			<Title>Retrograde Coffee</Title>
			<P>
				Retrograde Coffee a modern clean website of a coffee site. Made
				for practicing Astrojs.
			</P>

			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link
						target="_blank"
						href="https://ronit-retrograde.netlify.app/"
					>
						Retrograde
						<ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/retrograde-coffee-clone"
						target="_blank"
					>
						Retrograde Github <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<Badge>Astrojs</Badge>
					&nbsp;
					<Badge>TailwindCSS</Badge>
				</ListItem>
			</List>

			<WorkImage
				placeholder="blur"
				src="/images/projects/retrograde.gif"
				alt="multiversefull"
			/>
		</Container>
	</Layout>
);

export default Projects;
export { getServerSideProps } from "../../components/chakra";
