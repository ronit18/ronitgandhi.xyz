import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="CodyAi">
		<Container>
			<Title>CodyAi</Title>
			<P>
				CodyAi is a bot which helps in codings question. You can ask any
				coding related question and it will give a proper explanation
				with a code snippet.
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link target="_blank" href="https://codyai.ronitgandhi.xyz">
						CodyAi
						<ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/codyai"
						target="_blank"
					>
						CodyAi Github <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<Badge>Vite</Badge>
					&nbsp;
					<Badge>Vanilla HTML,CSS,JS</Badge>
					&nbsp;<Badge>OpenAI Api </Badge>
				</ListItem>
			</List>
			<br />

			<WorkImage
				placeholder="blur"
				src="/images/projects/codyaiReact.gif"
				alt="codyaireact"
			/>
			<WorkImage
				placeholder="blur"
				src="/images/projects/codyaiExpress.gif"
				alt="codyaiexpress"
			/>
			<WorkImage
				placeholder="blur"
				src="/images/projects/codyaiThree.gif"
				alt="codyaithree"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
