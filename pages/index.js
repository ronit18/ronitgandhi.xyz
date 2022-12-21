import { Container } from "@chakra-ui/react";

import Layout from "../components/layouts/article";

import Links from "../components/MainSection/Links";
import Skills from "../components/MainSection/Skill";
import Ilove from "../components/MainSection/Ilove";
import Aboutme from "../components/MainSection/Aboutme";
import Main from "../components/MainSection/Main";

const Home = () => (
	<Layout>
		<Container>
			<Main />

			<Aboutme />

			<Ilove />

			<Links />

			<Skills />
		</Container>
	</Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
