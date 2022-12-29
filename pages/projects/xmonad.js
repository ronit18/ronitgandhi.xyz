import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Xmonad">
		<Container>
			<Title>Xmonad Config</Title>
			<P>
				Xmonad is a window manager written in haskell. This is a Xmonad
				config &apos;riced&apos;.
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/xmonad"
						target="_blank"
					>
						Xmonad <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<span>
						<Badge>Haskell</Badge>
						&nbsp;
					</span>
				</ListItem>
			</List>
			<br />

			<WorkImage
				placeholder="blur"
				src="/images/projects/xmonad.gif"
				alt="xmonad"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
