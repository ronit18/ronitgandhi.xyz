import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Indian flag">
		<Container>
			<Title>Indian Flag</Title>
			<P>India Flag made by python (numpy and matplotlib).</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/Indian-Flag"
						target="_blank"
					>
						Indian flag Github <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<span>
						<Badge>Python</Badge>
						&nbsp;
						<Badge>Python Module (numpy, matplotlib)</Badge>
					</span>
				</ListItem>
			</List>
			<br />

			<WorkImage
				placeholder="blur"
				src="/images/projects/indiaflag.png"
				alt="Indianflag"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
