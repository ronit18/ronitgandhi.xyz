import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Facial Landmark Detection">
		<Container>
			<Title>Facial Landmark Detection</Title>
			<P>
				Facial Detection using python libraries such as cv2 and dlib.
				This program will show facial landmarks using 67 dots. The main
				application of this project is ; as we see the face filters used
				in snapchat and instagram is done using this logic.
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/Face-Detection"
						target="_blank"
					>
						Facial Landmark Detection Github{" "}
						<ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<Badge>Python</Badge>
					&nbsp;
					<Badge>Python Module (cv2, dlib)</Badge>
				</ListItem>
			</List>
			<br />

			<WorkImage
				placeholder="blur"
				src="/images/projects/facedetectiondlib.jpg"
				alt="facedetectiondlib"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
