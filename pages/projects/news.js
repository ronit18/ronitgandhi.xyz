import { Container, Link, List, ListItem, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
	<Layout title="News app">
		<Container>
			<Title>News app</Title>
			<P>
				<ul>
					<li style={{ listStyle: "none" }}>
						A news app made by NewsApi to get daily new news about
						current trends, business, sports, entertainment, health,
						science, Technology.{" "}
					</li>
					<li style={{ listStyle: " none" }}>
						The purpose of the project is to develop an application
						which will display news articles and videos verified and
						approved at backend. User can browse news articles and
						videos through various categories. Website will enable
						user to view news details, images, and video. This news
						app is made by react, bootstrap and news api.
					</li>
					<li style={{ listStyle: "none" }}>
						News app also have top loading bar and loading spinner.
					</li>
				</ul>
			</P>
			<br />
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Source Code</Meta>
					<Link
						href="https://github.com/ronit18/NewsApp"
						target="_blank"
					>
						News app Github <ExternalLinkIcon mx="2px" />
					</Link>
				</ListItem>

				<ListItem>
					<Meta>Technologies</Meta>
					<Badge>ReactJS</Badge>
					&nbsp;
					<Badge>Bootstrap</Badge>
					&nbsp;<Badge>News Api</Badge>
				</ListItem>
			</List>
			<br />

			{/* News home */}
			<WorkImage
				placeholder="blur"
				src="/images/projects/newslightdark.gif"
				alt="newslightdark"
			/>

			<WorkImage
				placeholder="blur"
				src="/images/projects/newszoom.gif"
				alt="newszoom"
			/>

			<WorkImage
				placeholder="blur"
				src="/images/projects/news.gif"
				alt="newshome"
			/>
		</Container>
		<br />
	</Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
