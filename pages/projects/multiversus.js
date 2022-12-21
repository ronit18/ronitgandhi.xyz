import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Projects = () => (
	<Layout title="Multiversus">
		<Container>
			<Title>Multiversus</Title>
			<P>
				Multiversus is a modern ui and animations webpage which is made
				by NextJS 13, Framer-motion.
			</P>

			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link
						target="_blank"
						href="https://ronit-multiversus.netlify.app/"
					>
						multiversus
						<ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/Multiverse-Madness"
						target="_blank"
					>
						multiversus Github <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<Badge>NextJs</Badge>
					&nbsp;
					<Badge>Framer-Motion</Badge>
					&nbsp;
					<Badge>TailwindCSS</Badge>
				</ListItem>
			</List>

			<WorkImage
				placeholder="blur"
				src="/images/projects/multiversefull.gif"
				alt="multiversefull"
			/>
			<WorkImage
				placeholder="blur"
				src="/images/projects/multiverseworld.gif"
				alt="multiverseworld"
			/>
			<WorkImage
				placeholder="blur"
				src="/images/projects/multiverseresponsive.gif"
				alt="multiverseresponsive"
			/>
		</Container>
	</Layout>
);

export default Projects;
export { getServerSideProps } from "../../components/chakra";
