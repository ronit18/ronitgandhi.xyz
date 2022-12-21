import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="Netflix Clone">
		<Container>
			<Title>Netflix Clone</Title>
			<P>
				In this project, I build a front-end Netflix clone with a
				Firebase back-end! I have used the TMDB API for all of the data
				and I have used Firebase Authentication to give login
				functionality. It will be able to store user specific data with
				a React front-end and a Firebase back-end. I have used Firestore
				which is cloud storage with Firebase to save data. he front-end
				is styled with Tailwind CSS - an incredible CSS framework.
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Website</Meta>
					<Link
						target="_blank"
						href="https://ronit-netflix.netlify.app/"
					>
						Netflix Clone <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/Netflix-React-TailwindCSS"
						target="_blank"
					>
						Netflix clone Github <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<span>
						<Badge>ReactJS</Badge>
						&nbsp;
						<Badge>TailwindCSS</Badge>
						<Badge>Firebase Backend</Badge>
						&nbsp;<Badge>TMDB Api</Badge>
					</span>
				</ListItem>
			</List>
			<br />

			{/* netflix home gif */}
			<WorkImage
				placeholder="blur"
				src="/images/projects/netflixhome.gif"
				alt="netflixhome"
			/>

			{/* netflix loginpage */}
			<WorkImage
				placeholder="blur"
				src="/images/projects/netflixsignin.png"
				alt="netflixlogin"
			/>

			{/* netflix signuppage */}
			<WorkImage
				placeholder="blur"
				src="/images/projects/netflixsignup.png "
				alt="netflixsignin"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
